import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css"; // 스타일을 위한 CSS 파일

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // 여기서 실제 API 호출로 대체
    const mockArticleData = {
      title: "Interview with Arati Prabhakar",
      src: "https://cdn.lilydb.app/thumbnail/fallback.webp",
      content: [
        {
          type: "text",
          value:
            "Today, I’m talking with Arati Prabhakar, the director of the White House Office of Science and Technology Policy. That’s a cabinet-level position, where she works as the chief science and tech adviser to President Joe Biden. She’s also the first woman to hold the position, which she took on in 2022.",
        },
        {
          type: "text",
          value:
            "Arati has a long history of working in government: she was the director of the National Institute of Standards and Technology, and she headed up the Defense Advanced Research Projects Agency (DARPA) for five years during the Obama administration. In between, she spent more than a decade working at several Silicon Valley companies and as a venture capitalist, so she has extensive experience in both the public and private sectors.",
        },
        {
          type: "bold",
          value: "This is a bold text example.",
        },
        {
          type: "title",
          value: "Section Title Example",
        },
      ],
      relatedArticles: [
        {
          id: 1,
          name: "Related Article 1",
          link: "https://example.com/related1",
          src: "https://cdn.lilydb.app/thumbnail/fallback4.webp",
        },
        {
          id: 2,
          name: "Related Article 2",
          link: "https://example.com/related2",
          src: "https://cdn.lilydb.app/thumbnail/fallback5.webp",
        },
        {
          id: 3,
          name: "Related Article 3",
          link: "https://example.com/related3",
          src: "https://cdn.lilydb.app/thumbnail/fallback6.webp",
        },
        {
          id: 4,
          name: "Related Article 4",
          link: "https://example.com/related4",
          src: "https://cdn.lilydb.app/thumbnail/fallback7.webp",
        },
        {
          id: 5,
          name: "Related Article 5",
          link: "https://example.com/related5",
          src: "https://cdn.lilydb.app/thumbnail/fallback8.webp",
        },
      ],
    };

    setArticle(mockArticleData);
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="article-content">
          <img
            src={article.src}
            alt={article.title}
            className="article-image mb-8"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 article-content">
            <div className="article-body">
              {article.content.map((item, index) => {
                switch (item.type) {
                  case "text":
                    return <p key={index}>{item.value}</p>;
                  case "bold":
                    return <strong key={index}>{item.value}</strong>;
                  case "title":
                    return <h2 key={index}>{item.value}</h2>;
                  default:
                    return null;
                }
              })}
            </div>
          </div>
          <div className="w-full md:w-1/4 md:pl-8">
            <h4 className="text-xl font-bold mb-4">Related Articles</h4>
            {article.relatedArticles.map((relatedItem) => (
              <div key={relatedItem.id} className="mb-4">
                <a href={relatedItem.link} className="flex items-center">
                  <img
                    src={relatedItem.src}
                    alt={relatedItem.name}
                    className="w-16 h-16 object-cover mr-4 rounded"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      {relatedItem.name}
                    </h5>
                    <span className="text-blue-500">Read More</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
