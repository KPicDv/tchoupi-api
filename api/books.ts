import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BOOKS, BOUGHT_BOOKS_NUMBERS } from '../constants/books';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const books = Object.entries(BOOKS).map(([key, name]) => ({
    name,
    number: Number(key),
    isBought: BOUGHT_BOOKS_NUMBERS.includes(Number(key)),
  }));
  return res.json(books);
}
