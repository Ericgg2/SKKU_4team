import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // 목데이터
    const mockData = [
      {
        id: 1,
        name: "Breakthrough in Natural Language Processing: AI Achieves Human-Level Performance",
        published_at: "2024/07/12",
        link: "https://example.com",
        provider: "example",
        src: "https://cdn.lilydb.app/thumbnail/fallback.webp",
        description:
          "Researchers unveil a new AI model that can understand and generate human-like text, paving the way for advanced language-based applications.",
      },
      {
        id: 2,
        name: "AI-Powered Robotic Assistants Revolutionize Healthcare Delivery",
        published_at: "2024/07/10",
        link: "https://example.com/healthcare",
        provider: "example",
        src: "https://cdn.lilydb.app/thumbnail/fallback2.webp",
        description:
          "Intelligent robots are now being deployed in hospitals to assist medical staff, improve patient care, and streamline operations.",
      },
      {
        id: 3,
        name: "AI-Powered Predictive Analytics Revolutionize Supply Chain Management",
        published_at: "2024/07/08",
        link: "https://example.com/supply-chain",
        provider: "example",
        src: "https://cdn.lilydb.app/thumbnail/fallback3.webp",
        description:
          "Innovative AI algorithms are now being used to optimize inventory, logistics, and distribution, leading to significant cost savings and improved efficiency.",
      },
    ];

    // 목데이터를 상태로 설정
    setNews(mockData);
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Latest AI News</h2>
        <div className="grid grid-cols-1 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-100 p-4 rounded-lg"
            >
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 md:pl-4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold">
                  <Link to={`/article/${item.id}`}>{item.name}</Link>
                </h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <p className="text-gray-500 mt-2">Provider: {item.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
