export interface BookFormat {
  type: string;
  price: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  cover: string;
  formats: BookFormat[];
  amazonUrl: string;
  series?: string;
  isUpcoming?: boolean;
  isPack?: boolean;
}

import data from './books.json';

export const books: Book[] = data;
