import { Link } from "./fragments/Link";

export class Navigation {
  logoUrl: string;
  links: Link[];
  tabs: NavTab[];
}

export class NavTab {
  tabText: string;
  columns: NavTabColumn[];
}

export class NavTabColumn {
  links: Link[];
}
