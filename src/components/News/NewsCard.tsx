"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import placeholder from '../../../public/placeholder.png';
import { addFavorite } from "../../services/favoriteService";
import { Article } from "../../types/news";
import { formatDate } from "../../utils/formatDate";
import { getShareLinks } from "../../utils/shareLinks";

export default function NewsCard({ article }: { article: Article }) {
  const [favorited, setFavorited] = useState(false);
  const shareLinks = getShareLinks(article.title, article.url);

  const handleFavorite = async () => {
    await addFavorite(article);
    setFavorited(true);
  };

  const id = encodeURIComponent(article.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden transition duration-200 hover:shadow-lg"
    >
      <Image
        src={article.urlToImage || placeholder }
        alt={article.title}
        width={400}
        height={240}
        className="w-full object-cover h-48 rounded-t"
      />

      <div className="p-4  flex flex-col justify-between min-h-[180px]">
        <h2 className="font-semibold text-lg line-clamp-2 mb-2">{article.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{article.description}</p>
        <p className="text-xs text-gray-500 mt-2">{formatDate(article.publishedAt)}</p>
        <p className="mt-1 text-xs text-gray-500">{article.source.name}</p>

        <div className="flex justify-between items-center mt-2">
          <Link href={`/news/${id}`} className="text-blue-600 text-sm dark:text-blue-400 mt-2">
            Read More →
          </Link>

          <button 
            onClick={handleFavorite}
            className={`text-xs ${favorited ? "text-green-500" : "text-gray-500"} hover:underline`}
          >
            {favorited ? "Favorited ✓" : "Add Favorite"}
          </button>
        </div>

        <div className="flex gap-3 mt-3 text-sm">
          <a href={shareLinks.twitter} target="_blank">🐦</a>
          <a href={shareLinks.facebook} target="_blank">📘</a>
          <a href={shareLinks.linkedin} target="_blank">💼</a>
        </div>
      </div>

    </motion.div>
  );
}
