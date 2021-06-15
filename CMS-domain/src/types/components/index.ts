import { Item } from "../item";

export class RichText extends Item {
  heading: SingleLineText;
  body: MultiLineText;
}

export class Banner extends Item {
  heading: SingleLineText;
  subheading: SingleLineText;
  body: MultiLineText
  image: string;
}

export class Card extends Item {
  heading: SingleLineText;
  subheading: SingleLineText;
  body: MultiLineText;
  link: Link;
}

export class Cards extends Item {
  children: Card[];
}

export type Datasource = RichText | Banner | Cards





export type SingleLineText = string;
export type MultiLineText = string;
export type Image = string;
export type Link = string;


