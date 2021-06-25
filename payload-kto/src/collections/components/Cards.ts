import { CollectionConfig } from 'payload/types';
import { Hierarchical } from '../hierarchical';
import { Slugs } from '../_slugs';

export const Cards: CollectionConfig = {
  slug: Slugs.Cards,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...Hierarchical({
      belongsToCollection: Slugs.Cards,
      childOf: [Slugs.DatasourceFolder],
      children: [Slugs.Card]
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


export const Card: CollectionConfig = {
  slug: Slugs.Card,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...Hierarchical({
      belongsToCollection: Slugs.Card,
      childOf: [Slugs.Cards]
    }),
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: Slugs.Image
    },
    {
      name: "link text",
      type: "text",
    },
    {
      name: 'page link',
      type: 'relationship',
      relationTo: [Slugs.Page]
    },
    {
      name: 'external link',
      type: 'text',
    },
  ],
}

