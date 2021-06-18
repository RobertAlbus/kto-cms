import { Field } from 'payload/types';

// Why `({...}) => Field[]` instead of Payload's internal BlockField type?

// The Block Field would have to have identical fields for everything that consumes the Block, including the relationship.relationTo field.
//
// This hierarchical data structure requires that nodes of a certain type 
// are parents or children to specific other node types. 
//
// With this method we are able to generate a deterministic set of fields with parent and children
// types as parameters for relationship.relationTo. 

// eg a Site cannot exist under a Page, but a Page can exist under a Site.

export const Hierarchical = (args: { 
  childOf?: string[], 
  children?: string[]}): Field[] => {
  
    let fields: Field[] = [];
    
    if (!!args.childOf?.length) {
      fields.push({
        name: 'parent',
        type: 'relationship',
        required: true,
        relationTo: args.childOf,   // hook can use this to iterate through the api endpoints to find the parent
      });
    }

    if (!!args.children?.length) {
      fields.push({
        name: 'children',
        type: 'relationship',
        hasMany: true,
        relationTo: args.children
      });
    }

  return fields;
}
