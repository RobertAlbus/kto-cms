import { Templates } from "./constants";
import { Item } from "./item";

export class Page extends Item {
  readonly templateName = Templates.Page;
  icon = "page.svg";
  insertOptions = ["Page", "Folder"];

  renderingsId: string[];  // delete-thru on unassociate and parent delete
  placeholders: string[];   //
}