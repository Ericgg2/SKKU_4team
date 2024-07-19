import React, { useState, useEffect } from "react";

const FeaturedArticle = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // 목데이터
    const mockData = {
      title: "The Future of AI: Transforming Industries and Shaping Our World",
      description:
        "Explore the latest advancements in artificial intelligence and how they are revolutionizing various sectors, from healthcare to transportation.",
      link: "https://example.com",
      provider: "example",
      src: "https://cdn.lilydb.app/thumbnail/fallback.webp",
    };

    // 목데이터를 상태로 설정
    setArticle(mockData);
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 max-w-lg">
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img
              src={article.src}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <p className="text-gray-700 mt-4">{article.description}</p>
          <a
            href={article.link}
            className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded inline-block"
          >
            Read More
          </a>
          <p className="text-gray-500 mt-2">Provider: {article.provider}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
