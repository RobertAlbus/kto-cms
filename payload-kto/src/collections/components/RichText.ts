import { CollectionConfig } from 'payload/types';
import { HierarchicalFields } from '../hierarchical/HierarchicalFields';
import { addToNewParent, removeFromOldParent } from '../hierarchical/HierarchicalHooks';
import { CommonFields } from '../_fields/common.fields';
import { Slugs } from '../_slugs';

export const RichText: CollectionConfig = {
  slug: Slugs.RichText,
  admin: {
    useAsTitle: 'heading',
  },
  hooks: {
    afterChange: [
      removeFromOldParent,
      addToNewParent(Slugs.Page)
    ]
  },
  fields: [
    ...HierarchicalFields({
      belongsToCollection: Slugs.RichText,
      childOf: [Slugs.DatasourceFolder]
    }),
    CommonFields.Body
  ],
}
