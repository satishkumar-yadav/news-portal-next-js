"use client";
import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        value={query}
        placeholder="Search news articles..."
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-l-lg px-4 py-2 w-64"
      />
      <button
        onClick={() => onSearch(query)}
        className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}
