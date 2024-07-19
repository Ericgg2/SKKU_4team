import React from "react";

const FeaturedVideos = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4">
            <div className="bg-gray-300 h-48 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <h3 className="text-xl font-semibold mt-4">Video Title</h3>
          </div>
          {/* 다른 비디오 아이템도 이와 같은 형식으로 추가 */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
