import { CollectionConfig } from 'payload/types';
import { Hierarchical } from '../hierarchical';
import { CommonFields } from '../_fields/common.fields';
import { Slugs } from '../_slugs';

export const Banner: CollectionConfig = {
  slug: Slugs.Banner,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...Hierarchical({
      belongsToCollection: Slugs.Banner,
      childOf: [Slugs.DatasourceFolder]
    }),
    CommonFields.Heading,
    CommonFields.Subheading,
    CommonFields.Body,
    CommonFields.Image,
    CommonFields.Link
  ],
}

