import { ReservedIds, Templates } from "./types/constants";
import { RootItem } from "./types/item";

export const ContentRoot: RootItem = {
  id: ReservedIds.Nill,
  children: [],
  renderings: [],
  templateName: Templates.ContentRoot,
  icon: "content-root.svg",
  
  name: "Root",
  urlComponent: "root:",
  location: "root:/",

  insertOptions: [
    Templates.Site,
    Templates.Folder
  ]
}
