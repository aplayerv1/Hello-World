export interface Nzedb {
  description: string;
  docs: string;
  feedUrl: string;
  generator: string;
  items: Item[];
  language: string;
  link: string;
  title: string;
  ttl: string;
  webMaster: string;
}

export interface Item {
  categories: string[];
  comments: string;
  content: string;
  contentSnippet: string;
  enclosure: Enclosure;
  guid: string;
  isoDate: Date;
  link: string;
  pubDate: Date;
  title: string;
}

export interface Enclosure {
  length: string;
  type: string;
  url: string;
}
