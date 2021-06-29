import { CollectionConfig } from 'payload/types';
import { HierarchicalFields } from './hierarchical/HierarchicalFields';
import { Slugs } from './_slugs';

export const Site: CollectionConfig = {
  slug: Slugs.Site,
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "id"]
  },
  fields: [
    ...HierarchicalFields({
      belongsToCollection: Slugs.Site,
      children: [Slugs.Page, Slugs.DatasourceFolder, Slugs.ControllerFolder]
    }),
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'start-page',
      type: 'relationship',
      relationTo: [Slugs.Page]
    },
  ],
}
