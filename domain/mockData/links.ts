import { Link } from "../fragments/Link"

export const createLink = (quantity: number = 1) => {
  let links: Link[] = [];
  for (let i=0; i < quantity; i++) {
    const link = new Link();
    link.Text = `Link ${i+1}`;
    link.Url = "google.com"
    links.push(link)
  }

  return links;
}
