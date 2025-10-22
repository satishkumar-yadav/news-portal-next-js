import axios from "axios";
import { Article } from "../types/news";

const BASE_URL = process.env.NEWS_BASE_URL ! ; 

const API_KEY = process.env.NEWS_API_KEY ?? "" ;   // handle missing env

if(!API_KEY){
  console.log("api  key not found error");
  throw new Error("API_KEY is not defined in .env.local file")
}

export async function getTopHeadlines(): Promise<Article[]> {
    console.log("api: ", API_KEY);
    console.log("direct api: ", process.env.NEWS_API_KEY!);
  const res = await axios.get(
    `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}` , {maxContentLength: 1000000}
  );  // limit res data to 1mb

  console.log("res: ",res.data.articles);
  return res.data.articles;
} 
 
export async function searchArticles(query: string): Promise<Article[]> {
  const res = await axios.get(
    `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`
  );
  console.log("res: ",res.data.articles);
  return res.data.articles;
}

export async function getByCategory(category: string): Promise<Article[]> {
  const res = await axios.get(
    `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  console.log("res: ",res.data.articles);
  return res.data.articles;
}
