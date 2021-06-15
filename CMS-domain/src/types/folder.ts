import { Templates } from "./constants";
import { Item } from "./item";

export class Folder extends Item {
  templateName = Templates.Folder;
  icon = "folder.svg";
  insertOptions = Templates.Components
}