"use client";
import { useEffect, useState } from "react";
import NewsCard from "../components/News/NewsCard";
// import NewsGrid from "../components/News/NewsGrid";
import SearchBar from "../components/SearchBar";
import { getTopHeadlines, searchArticles } from "../services/newsService";
import { Article } from "../types/news";

export default function HomePage() {
  // const [articles, setArticles] = useState([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

 useEffect(() => {
    getTopHeadlines().then((data) => {
      setArticles(data);
      localStorage.setItem("articles", JSON.stringify(data));
      setLoading(false);
    });
  }, []);

 const handleSearch = async (query: string) => {
    setLoading(true);
    const results = query ? await searchArticles(query) : await getTopHeadlines();
    setArticles(results);
    setLoading(false);
  };

  if (loading) return <p className="text-center mt-8">Loading News...</p>;

  return (
    <main className="p-6">
      <SearchBar onSearch={handleSearch} />
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {articles.map((article, idx) => (
          <NewsCard key={idx} article={article} />
          // <NewsGrid key={idx} articles={articles} />
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more...</p>}
    </main>
  );
}

     
      
    
  



















// useEffect(() => {
  //   getTopHeadlines().then(setArticles);
  // }, []);


 // const handleSearch = async (q: string) => {
  //   setQuery(q);
  //   const res = q ? await searchArticles(q) : await getTopHeadlines();
  //   setArticles(res);
  // };