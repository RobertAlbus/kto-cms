import { Field, GroupField, RichTextField, TextareaField, TextField, UploadField } from "payload/dist/fields/config/types"
import { Slugs } from "../_slugs"

export class CommonFields { 

  // should everything have a name? aka the tree-item name
  static Name: TextField = {
    name: 'name',
    type: 'text',
    required: true
  }

  static Heading: TextField = {
    name: 'heading',
    type: 'text'
  }

  static Subheading: TextField = {
    name: 'subheading',
    type: 'text',
  }

  static Body: RichTextField = {
    name: 'body',
    type: 'richText',
  }

  static Image: UploadField = {
    name: 'image',
    type: 'upload',
    relationTo: Slugs.Image
  }

  static Link: GroupField = {
    name: 'link',
    type: 'group',
    fields: [
      {
        name: 'link text',
        type: 'text'
      },
      {
        name: 'internal link',
        type: 'relationship',
        relationTo: Slugs.Page,
      },
      {
        name: 'external URL',
        type: 'text',
        admin: {
          placeholder: "use this field if the link is on another website"
        }
      },
    ]
  }
}

export const StandardContent: Field[] = [
  CommonFields.Heading,
  CommonFields.Subheading,
  CommonFields.Body,
  CommonFields.Link,
  
]