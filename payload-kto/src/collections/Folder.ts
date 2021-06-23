import { CollectionConfig, Field } from 'payload/types';
import { Hierarchical } from './hierarchical';
import { DataSources, Slugs } from './_slugs';


const Folder = (args: { 
  slug: string,
  additionalFields: Field[]
}): CollectionConfig => {

  const Item: CollectionConfig = {
    slug: args.slug,
    admin: {
      useAsTitle: "title"
    },
    fields: [
      ...args.additionalFields,
      {
        name: 'title',
        type: 'text',
      },
    ],
  }

  return Item;
}

export const DatasourceFolder: CollectionConfig = Folder({
  slug: Slugs.DatasourceFolder,
  additionalFields: Hierarchical({
    belongsToCollection: Slugs.DatasourceFolder,
    childOf: [Slugs.Page],
    children: [...DataSources, Slugs.DatasourceFolder]
  }),
});


export const ControllerFolder: CollectionConfig = Folder({
  slug: Slugs.ControllerFolder,
  additionalFields: Hierarchical({
    belongsToCollection: Slugs.ControllerFolder,
    childOf: [Slugs.Site],
    children: [Slugs.Controller, Slugs.ControllerFolder]
  })
});

