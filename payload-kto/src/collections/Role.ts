import { CollectionConfig } from 'payload/types';
import { Slugs } from './_slugs';


export const Role: CollectionConfig = {
  slug: Slugs.Role,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: "users",
      type: 'relationship',
      relationTo: Slugs.User,
      index: true
    }
  ],
}
