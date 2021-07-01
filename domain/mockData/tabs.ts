import { NavTab, NavTabColumn } from "../Navigation";
import { createLink } from "./links";

export const createNavTab = (quantity: number = 1): NavTab[] => {

  let tabs: NavTab[] = [];
  for (let i = 0; i < quantity; i++ ){
    let tab = new NavTab();
    tab.heading = `Tab ${i+1}`;
    tab.columns = createColumn(4);
  }

  return tabs;
}

const createColumn = (quantity: number = 1): NavTabColumn[] => {
  let columns: NavTabColumn[] = [];
  for (let i = 0; i < quantity; i++ ){
    let column = new NavTabColumn();
    column.heading = `Tab ${i+1}`
    column.links = createLink(4 + i);
  }

  return columns;
}