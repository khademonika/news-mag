import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        }
      });
  }, [category]);

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-2xl font-bold text-white mb-8">
        Latest <span className="bg-red-600 px-2 py-1 rounded text-white">News</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((news, i) => (
            <NewsItem
              key={i}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No news articles found.</p>
        )}
      </div>
    </div>
  );
}

export default NewsBoard;
