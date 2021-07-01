import payload from "payload";
import { AfterChangeHook } from "payload/dist/collections/config/types";

export const removeFromOldParent: AfterChangeHook = (submission) => {

  if (submission.operation != 'update') return;

  const originalParent = getParent(submission.doc.parent);
  originalParent.document.then((parent) => {


    // console.log("REMOVE FROM PARENT")
    // console.log("original children")
    // console.log(getChildren(parent))

    // console.log("writable children")
    // console.log(getChildren(parent)
    // .map(convertChildToWritableFormat)
    // )


    let updatedChildren =
      getChildren(parent)
        .map(convertChildToWritableFormat);

    console.log("UPDATED CHILDREN")
    console.log(updatedChildren)

    updatedChildren = updatedChildren
        .filter( child => child.value != submission.doc.id as string);

    console.log("FILTERED CHILDREN")
    console.log(updatedChildren)
    console.log("SELF ID")
    console.log(submission.doc.id)


    console.log("doc")
    console.log(submission.doc)
    console.log("updated children")
    console.log(updatedChildren)

    console.log(originalParent)
    payload.update({
      collection: originalParent.type,
      id: originalParent.id,
      data: {
        children: updatedChildren
      },
    });
  });
}


// this function is just a builder for the actual hook
// submission.doc does not contain the collection type for the hooked item
// so this has to be passed in
export const addToNewParent = (belongsToCollection: string): AfterChangeHook => {
  const hook: AfterChangeHook = async (submission) => {
    if ( !['update', 'create'].includes(submission.operation) ) return;

    const newParent = getParent(submission.doc.parent)
    newParent.document.then((parent) => {

      // console.log("ADD TO PARENT")
      // console.group("parent")
      // console.log(parent)

      let updatedChildren: WritableChild[] =
        getChildren(parent)
        .map(convertChildToWritableFormat);

      updatedChildren.push({
        relationTo: belongsToCollection,
        value: submission.doc.id as string
      })

      // console.log("updated children")
      // console.log(updatedChildren)

      // console.log({
      //   collection: newParent.type,
      //   id: newParent.id,
      //   data: {
      //     children: updatedChildren
      //   }
      // });

      // // change object to have value instead of id for the relationship id field
      // updatedChildren = updatedChildren.map((child) => {
      //   return {
      //     value: child.id,
      //     relationTo: child.relationTo,
      //   }
      // });

      payload.update({
        collection: newParent.type,
        id: newParent.id,
        data: {
          children: updatedChildren
        }
      });
    });
  }

  return hook;
}

const getParent = (obj: any): {type: string, id: string, document: Promise<any>} => {
  let type:string = obj["relationTo"];
  let id: string = obj["value"];

  return {
    type: type,
    id: id,
    document: payload.findByID({
      collection: type,
      id: id,
      depth: 1
    }) as Promise<any>
  }
}

type ReceiveableChild = {
  relationTo: string,
    value: {
      id: string
    }
}
type WritableChild = {
  relationTo: string,
  value: string
}

const getChildren = (parent: any): ReceiveableChild[] => {
  let children = Array.from(
    parent.children || []
  ) as unknown as ReceiveableChild[];

  // console.log("GET CHILDREN")
  // console.log(children)
  children = children.filter( child => {
    return child &&
      child.value &&
      child.value.id &&
      child.relationTo
  });

  // NOTE this doesn't seem to be doing anything
  return [...new Set(children)];
  // cast to set to remove duplicates and spread back into an array.
  // if this is changed to not use Set() then remove "downlevelIteration" from tsconfig.json
}

const convertChildToWritableFormat = (child: ReceiveableChild): WritableChild => {
  return {
      relationTo: child.relationTo,
      value: child.value.id
    }
}


