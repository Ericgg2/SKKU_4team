import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Tags.css"; // CSS 파일을 임포트합니다.
import Loading from "./Loading"; // 로딩 컴포넌트를 임포트합니다.

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState({});
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    // 목데이터
    const mockData = [
      { id: 1, keyword: "#日常" },
      { id: 2, keyword: "#学園" },
      { id: 3, keyword: "#アイドル" },
      { id: 4, keyword: "#使用人(メイド)" },
      { id: 5, keyword: "#ヘラる" },
      { id: 6, keyword: "#姉妹" },
    ];

    // 목데이터를 상태로 설정
    setTags(mockData);
  }, []);

  const handleTagClick = (tag) => {
    if (selectedTag === tag.id) {
      setSelectedTag(null);
      return;
    }

    // 선택된 태그 설정
    setSelectedTag(tag.id);
    setLoading(true); // 로딩 상태로 설정

    // 연관된 아티클 데이터 설정
    setTimeout(() => {
      const related = [
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
      ];

      setRelatedArticles({ ...relatedArticles, [tag.id]: related });
      setLoading(false); // 로딩 완료
    }, 2000); // 로딩 시간 시뮬레이션
  };

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2 parent-tag">
          {tags.map((tag) => (
            <div key={tag.id} className="relative">
              <button
                className="bg-blue-600 text-white rounded-full px-4 py-2 cursor-pointer parent-tag-button hover:bg-blue-700 transition"
                onClick={() => handleTagClick(tag)}
              >
                {tag.keyword}
              </button>
            </div>
          ))}
        </div>
        {selectedTag && (
          <CSSTransition
            in={!!selectedTag}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="child-tag w-full mt-4">
              <h4 className="text-xl font-bold mb-4 child-tag-title">
                Related Articles
              </h4>
              {loading ? (
                <Loading />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedArticles[selectedTag]?.map((relatedItem) => (
                    <div
                      key={relatedItem.id}
                      className="flex bg-gray-200 p-4 rounded-lg child-tag-article"
                    >
                      <div className="w-1/4 flex-shrink-0">
                        <img
                          src={relatedItem.src}
                          alt={relatedItem.name}
                          className="h-full w-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-3/4 pl-4">
                        <h5 className="text-lg font-semibold">
                          {relatedItem.name}
                        </h5>
                        <a
                          href={relatedItem.link}
                          className="text-blue-500 mt-2 block"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CSSTransition>
        )}
      </div>
    </section>
  );
};

export default Tags;
