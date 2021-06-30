import { Link } from "../fragments/Link";
import { ComponentBase } from "./_componentBase";

export class Cards extends ComponentBase {
  Cards: Card[]
}

export class Card extends ComponentBase {
  Heading: string;
  Subheading: string;
  Body: string;
  ImageUrl: string;
  Link: Link
}