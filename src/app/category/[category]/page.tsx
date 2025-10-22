"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NewsGrid from "../../../components/News/NewsGrid";
import { getByCategory } from "../../../services/newsService";
import { Article } from "../../../types/news";

export default function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getByCategory(category as string).then(setArticles);
  }, [category]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold capitalize mb-6">{category} News</h1>
      <NewsGrid articles={articles} />
    </main>
  );
}
