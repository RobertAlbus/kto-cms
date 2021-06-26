import { CollectionConfig } from "payload/types";
import { CommonFields } from "./_fields/common.fields";
import { Slugs } from "./_slugs";

export const Image: CollectionConfig = {
  
  slug: Slugs.Image,
  upload: {
    staticURL: '/media',
    staticDir: '/media',
    mimeTypes: ['image/*'], 
    // imageSizes: [
    //   {
    //     name: "banner",
    //     width: 1920,
    //     height: 600,
    //   },
    //   {
    //     name: "mobile banner",
    //     width: 1000,
    //     height: 300,
    //   },
    //   {
    //     name: "thumbnail",
    //     width: 300,
    //     height: 300,
    //   }
    // ]
  },
  fields: [
    CommonFields.Name
  ]
}
