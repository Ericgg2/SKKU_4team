import React from "react";
import { Link } from "react-router-dom";

const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      name: "The Rise of AI-Powered Chatbots: Transforming Customer Service",
      published_at: "2 days ago",
      link: "https://example.com",
      src: "https://cdn.lilydb.app/thumbnail/fallback.webp",
      description:
        "AI chatbots are revolutionizing customer service with advanced natural language processing capabilities.",
    },
    // 다른 아티클 데이터...
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Articles</h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-100 p-4 flex items-center">
              <div className="bg-gray-300 h-12 w-12 flex-shrink-0 flex items-center justify-center">
                <img
                  src={article.src}
                  alt={article.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  <Link to={`/article/${article.id}`}>{article.name}</Link>
                </h3>
                <p className="text-gray-500">{article.published_at}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArticles;
