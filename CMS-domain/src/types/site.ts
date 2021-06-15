import { Templates } from "./constants";
import { Item } from "./item";

export class Site extends Item {
  readonly templateName = Templates.Site;
  icon = "site.svg";
  insertOptions = ["Page", "Folder"];

  startPageId: string;

}