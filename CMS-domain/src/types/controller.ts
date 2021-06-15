import { Templates } from "./constants";
import { Item } from "./item";

export class Controller extends Item {
  readonly templateName = Templates.Controller;
  icon = "rendering.svg";
  
  controller: string;
  allowedTemplateIds: string[]  // not sure how to manipulate this as an authorable field.
                                // probably one way, one to many
}