import { List } from "./List";
import { StorySummary, Summary } from "./Summary";

export interface Character {
  id: number;
  name?: string;
  description?: string;
  modified?: string;
  resourceURI?: string;
  urls?: URL[];
  thumbnail?:Image;
  series?: List<Summary>;
  stories?: List<StorySummary>;
  comics?: List<Summary>;
  events?: List<Summary>;
}

interface URL {
  type?: string;
  url?: string;
}

interface Image {
  path? : string;
  extension?: string;
}

// export type Character  = {
//   name: string;
//   age: number;
// }