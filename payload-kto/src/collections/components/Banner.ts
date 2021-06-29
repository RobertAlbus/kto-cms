import { CollectionConfig } from 'payload/types';
import { HierarchicalFields } from '../hierarchical/HierarchicalFields';
import { CommonFields } from '../_fields/common.fields';
import { Slugs } from '../_slugs';

export const Banner: CollectionConfig = {
  slug: Slugs.Banner,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...HierarchicalFields({
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

