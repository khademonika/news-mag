import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.articles) {
  //         setArticles(data.articles);
  //       }
  //     });
  // }, [category]);

useEffect(() => {
  setLoading(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    console.error("API key is missing!");
    setLoading(false);
    return;
  }

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      setArticles(data.articles || []);
    })
    .catch(err => {
      console.error("Failed to fetch news:", err);
      setArticles([]);
    })
    .finally(() => setLoading(false));
}, [category]);


  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-2xl font-bold text-white mb-8">
        Latest <span className="bg-red-600 px-2 py-1 rounded text-white">News</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{loading ? <p>Loading...</p> :
  Array.isArray(articles) && articles.map((news, i) => (
    <NewsItem key={i} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
))}

          
      </div>
    </div>
  );
}

export default NewsBoard;
