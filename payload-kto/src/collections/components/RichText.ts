import { CollectionConfig } from 'payload/types';
import { Hierarchical } from '../hierarchical';
import { Slugs } from '../_slugs';

export const RichText: CollectionConfig = {
  slug: Slugs.RichText,
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
      name: 'body',
      type: 'richText',
    }
  ],
}
