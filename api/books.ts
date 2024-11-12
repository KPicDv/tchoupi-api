import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BOOKS, BOUGHT_BOOKS_NUMBERS } from '../contants/books';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const books = Object.entries(BOOKS).map(([key, name]) => ({
    name,
    isBought: BOUGHT_BOOKS_NUMBERS.includes(Number(key)),
  }));
  return res.json(books);
}
