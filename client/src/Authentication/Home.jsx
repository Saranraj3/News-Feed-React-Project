import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-09-30&sortBy=publishedAt&apiKey=db54347d1b764dd09d73019d07d76f14"
        ); // replace with your API URL
        setNews(response.data.articles); // adjust this based on the API's response format
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
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
                <img src={article.urlToImage} alt="" />
              <h2>{article.title}</h2>
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
