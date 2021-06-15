import { Templates } from "./constants";
import { Controller } from "./controller";
import { Item } from "./item";

export class Rendering extends Item {
  templateName = Templates.Rendering;
  icon = "rendering.svg";
  
  datasource: string;
  controller: Controller;
  placeholder: string;

}