import { CollectionConfig } from 'payload/types';
import { HierarchicalFields } from './hierarchical/HierarchicalFields';
import { Slugs } from './_slugs';


export const Controller: CollectionConfig = {
  slug: Slugs.Controller,
  admin: {
    useAsTitle: "title"
  },
  fields: [
    ...HierarchicalFields({
      belongsToCollection: Slugs.Controller,
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

