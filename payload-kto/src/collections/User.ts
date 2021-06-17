import { CollectionConfig } from 'payload/types';
import { Slugs } from './_slugs';

export const Users: CollectionConfig = {
  slug: Slugs.User,
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};
