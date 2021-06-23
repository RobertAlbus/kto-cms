import { CollectionConfig } from 'payload/types';
import { Hierarchical } from './hierarchical';
import { Slugs } from './_slugs';

export const Site: CollectionConfig = {
  slug: Slugs.Site,
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "id"]
  },
  fields: [
    ...Hierarchical({
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
