import { CollectionConfig } from 'payload/types';
import { Hierarchical } from './hierarchical';
import { DataSources, Slugs } from './_slugs';

export const Page: CollectionConfig = {
  slug: Slugs.Page,
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "id"]
  },

  fields: [
    ...Hierarchical({
      belongsToCollection: Slugs.Page,
      childOf: [Slugs.Page, Slugs.Site],
      children: [Slugs.Page, Slugs.DatasourceFolder],
      hasPath: true
    }),
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'renderings',
      type: 'array',
      fields: [
        {
          name: 'controller',
          type: 'relationship',
          relationTo: [Slugs.Controller]
        },
        {
          name: 'data source',
          type: 'relationship',
          relationTo: [...DataSources]
        }
      ]
    },
    
  ],
}

