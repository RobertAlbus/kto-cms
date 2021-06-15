import { Rendering } from "./rendering";

// everything but parent ref, needed for the parentless content root item
export class RootItem {
  readonly id: string;
  children: Item[];         // should be updated any time child is updated
  renderings: Rendering[];   // should be internal to the item
  readonly templateName: string;     // the name for this type of item
  icon: string;

  name: string;             // label for the editor
  urlComponent: string;     // if url-ized version of name, update on name change
  location: string;         // must be updated any time urlcomponent or parent is updated

  // list of template names?
  insertOptions: string[];  // allowed types for child nodes. -- readonly or editable?
}

// the real item definition for everything but the parentless root node
export class Item extends RootItem {
  parent: RootItem;
}

