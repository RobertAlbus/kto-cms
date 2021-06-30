import { CollectionConfig, Field } from 'payload/types';
import { HierarchicalFields } from './hierarchical/HierarchicalFields';
import { addToNewParent, removeFromOldParent } from './hierarchical/HierarchicalHooks';
import { CommonFields } from './_fields/common.fields';
import { DataSources, Slugs } from './_slugs';


const Folder = (args: { 
  slug: string,
  additionalFields: Field[]
}): CollectionConfig => {

  const Item: CollectionConfig = {
    slug: args.slug,
    admin: {
      useAsTitle: CommonFields.Name.name
    },
    hooks: {
      afterChange: [
        removeFromOldParent,
        addToNewParent(args.slug)
      ]
    },
    fields: [
      ...args.additionalFields,
      CommonFields.Name,
    ],
  }

  return Item;
}

export const DatasourceFolder: CollectionConfig = Folder({
  slug: Slugs.DatasourceFolder,
  additionalFields: HierarchicalFields({
    belongsToCollection: Slugs.DatasourceFolder,
    childOf: [Slugs.Page, Slugs.Site],
    children: [...DataSources, Slugs.DatasourceFolder]
  }),
});


export const ControllerFolder: CollectionConfig = Folder({
  slug: Slugs.ControllerFolder,
  additionalFields: HierarchicalFields({
    belongsToCollection: Slugs.ControllerFolder,
    childOf: [Slugs.Site],
    children: [Slugs.Controller, Slugs.ControllerFolder]
  })
});

