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
      belongsToCollection: Slugs.RichText,
      childOf: [Slugs.DatasourceFolder]
    }),
    {
      name: 'body',
      type: 'richText',
    }
  ],
}
