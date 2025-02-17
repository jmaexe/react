import { List } from './List';
import { Summary } from './Summary';

export interface Comic {
  id?: number;
  digitalId?: number;
  title?: string;
  issueNumber?: number;
  variantDescription?: string;
  description: string;
  modified: string;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: string;
  textObjects?: [];
  resourceURI?: string;
  urls?: [];
  series?: Object;
  variants?: [];
  collections?: [];
  collectedIssues?: [];
  dates?: [];
  prices?: [];
  thumbnail?: Object;
  images?: [];
  creators?: Object;
  characters?: List<Summary>;
  stories?: Object;
  events?: Object;
}
