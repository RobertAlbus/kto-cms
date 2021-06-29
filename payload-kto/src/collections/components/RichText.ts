import { CollectionConfig } from 'payload/types';
import { HierarchicalFields } from '../hierarchical/HierarchicalFields';
import { CommonFields } from '../_fields/common.fields';
import { Slugs } from '../_slugs';

export const RichText: CollectionConfig = {
  slug: Slugs.RichText,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...HierarchicalFields({
      belongsToCollection: Slugs.RichText,
      childOf: [Slugs.DatasourceFolder]
    }),
    CommonFields.Body
  ],
}
