import { Link } from "./fragments/Link";

export class Navigation {
  links: Link[];
  tabs: NavTab[];
}

export class NavTab {
  heading: string;
  columns: NavTabColumn[];
}

export class NavTabColumn {
  heading: string;
  links: Link[];
}
