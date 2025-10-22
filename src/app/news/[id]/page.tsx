"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Article } from "../../../types/news";
// import { formatDate } from "../../../utils/formatDate";

export default function NewsDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("articles") || "[]");
    const found = data.find((a: Article) => a.title === decodeURIComponent(id as string));
    setArticle(found);
  }, [id]);

  if (!article) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="mb-4 rounded" />
      <p className="text-gray-700 leading-relaxed">{article.content || article.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        {article.source.name} • {new Date(article.publishedAt).toDateString()}
      </p>
       {/* <p className="text-sm text-gray-500 mb-4">
        {article.source.name} • {formatDate(article.publishedAt)}
      </p> */}
       <a
        href={article.url}
        target="_blank"
        className="text-blue-600 mt-4 inline-block"
      >
        Read Original Article →
      </a>
    </div>
  );
}

     
      
     















// useEffect(() => {
  //   const stored = localStorage.getItem("articles");
  //   if (stored) {
  //     const parsed = JSON.parse(stored).find((a: Article) => a.title === id);
  //     setArticle(parsed);
  //   }
  // }, [id]);