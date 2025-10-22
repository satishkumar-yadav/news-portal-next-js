"use client";
import { useEffect, useState } from "react";
import NewsGrid from "../../components/News/NewsGrid";
import { getFavorites } from "../../services/favoriteService";
import { Article } from "../../types/news";

export default function FavoritesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getFavorites().then(setArticles);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Favorite Articles</h1>
      <NewsGrid articles={articles} />
    </main>
  );
}
