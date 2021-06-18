import { CollectionConfig } from 'payload/types';
import { Hierarchical } from './hierarchical';
import { Slugs } from './_slugs';


export const Controller: CollectionConfig = {
  slug: Slugs.Controller,
  admin: {
    useAsTitle: "title"
  },
  fields: [
    ...Hierarchical({
      childOf: [Slugs.ControllerFolder]
    }),
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'controller name',
      type: 'text',
    },
  ],
}

