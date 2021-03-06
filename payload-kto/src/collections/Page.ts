import { CollectionConfig } from 'payload/types';
import { HierarchicalFields } from './hierarchical/HierarchicalFields';
import { addToNewParent, removeFromOldParent } from './hierarchical/HierarchicalHooks';
import { CommonFields } from './_fields/common.fields';
import { DataSources, Slugs } from './_slugs';

export const Page: CollectionConfig = {
  slug: Slugs.Page,
  admin: {
    useAsTitle: "heading",
    defaultColumns: ["heading", "id"]
  },
  hooks: {
    afterChange: [
      removeFromOldParent,
      addToNewParent(Slugs.Page)
    ]
  },

  fields: [
    ...HierarchicalFields({
      belongsToCollection: Slugs.Page,
      childOf: [Slugs.Page, Slugs.Site],
      children: [Slugs.Page, Slugs.DatasourceFolder],
      hasPath: true
    }),
    CommonFields.Heading,
    CommonFields.Subheading,
    CommonFields.Body,
    // CommonFields.Image,
    CommonFields.Link,
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

