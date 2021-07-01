import { Navigation } from "../Navigation";
import { createLink } from "./links";
import { createNavTab } from "./tabs";

export const createNavigation = () => {

  let navigation = new Navigation();
  navigation.links = createLink(2);
  navigation.tabs = createNavTab(2);

  return navigation;
}
