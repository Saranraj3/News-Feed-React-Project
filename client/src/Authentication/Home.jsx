import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_KEY;

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2024-09-30&sortBy=publishedAt&apiKey=${API}`
      ); // replace with your API URL
      setNews(response.data.articles); // adjust this based on the API's response format
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch news on component mount
    fetchNews();

    // Set up interval to refresh news every 5 minutes (300,000 ms)
    const intervalId = setInterval(fetchNews, 300000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div>
          {news.map((article, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h2>{article.title}</h2>
              <h2>{article.author}</h2>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
              )}
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
