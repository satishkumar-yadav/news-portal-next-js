import axios from "axios";
import { Article } from "../types/news";

const MOCK_API: string  = process.env.BASE_MOCK_API as string ;  // type safe fallback

export async function getFavorites(): Promise<Article[]> {
  const res = await axios.get(MOCK_API);
  return res.data;
}

export async function addFavorite(article: Article): Promise<void> {
  await axios.post(MOCK_API, article);
}

export async function removeFavorite(id: string): Promise<void> {
  await axios.delete(`${MOCK_API}/${id}`);
}
 