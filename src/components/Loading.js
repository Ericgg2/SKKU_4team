import React from "react";
import "./Loading.css"; // 로딩 CSS 파일을 임포트합니다.

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
