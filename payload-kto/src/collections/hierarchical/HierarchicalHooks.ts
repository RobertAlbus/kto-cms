import payload from "payload";
import { AfterChangeHook } from "payload/dist/collections/config/types";

export const removeFromOldParent: AfterChangeHook = (submission) => {

  if (submission.operation != 'update') return;

  const originalParent = getParent(submission.doc.parent);
  originalParent.document.then((parent) => {


    console.log("REMOVE FROM PARENT")
    console.log("original children")
    console.log(getChildren(parent))

    console.log("writable children")
    console.log(getChildren(parent)
    .map(convertChildToWritableFormat)
    )


    let updatedChildren = 
      getChildren(parent)
        .map(convertChildToWritableFormat)
        .filter( child => child.id != submission.doc.id);

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
  
      console.log("ADD TO PARENT")
      console.group("parent")
      console.log(parent)
      
      let updatedChildren = 
        getChildren(parent)
        .map(convertChildToWritableFormat);
  
      updatedChildren.push({
        relationTo: belongsToCollection,
        id: submission.doc.id as string
      })
  
      console.log("updated children")
      console.log(updatedChildren)

      console.log({
        collection: newParent.type,
        id: newParent.id,
        data: {
          children: updatedChildren
        }
      })
          
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
  id: string
}

const getChildren = (parent: any): ReceiveableChild[] => {
  let children = Array.from(
    parent.children || []
  ) as unknown as ReceiveableChild[];

  children = children.filter( child => {
    return child &&
      child.value &&
      child.value.id &&
      child.relationTo
  });
  
  return [...new Set(children)]; 
  // cast to set to remove duplicates and spread back into an array.
  // if this is changed to not use Set() then remove "downlevelIteration" from tsconfig.json
}
 
const convertChildToWritableFormat = (child: ReceiveableChild): WritableChild => {
  return {
      relationTo: child.relationTo,
      id: child.value.id
    }
}


