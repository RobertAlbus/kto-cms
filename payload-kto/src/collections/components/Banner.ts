import { CollectionConfig } from 'payload/types';
import { Hierarchical } from '../hierarchical';
import { Slugs } from '../_slugs';

export const Banner: CollectionConfig = {
  slug: Slugs.Banner,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...Hierarchical({
      childOf: [Slugs.DatasourceFolder]
    }),
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'textarea',
    },
    {
      name: "link text",
      type: "text",
    },
    {
      name: 'page link',
      type: 'relationship',
      relationTo: [Slugs.Page]
    },
    {
      name: 'external link',
      type: 'text',
    },
  ],
}

