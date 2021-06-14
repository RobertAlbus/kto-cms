import { Block, FieldBase, fieldHasSubFields, RelationshipField } from 'payload/dist/fields/config/types';
import { CollectionConfig, Field } from 'payload/types';
var thing: FieldBase


var relationship: RelationshipField = {

    name: 'users',
    type: 'relationship',
    relationTo: "users",
    index: true
}

const Role: CollectionConfig = {
  slug: 'roles',
  admin: {
    useAsTitle: 'title',
    

  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    relationship
  ],
}

export default Role;