import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeaturedArticle from "./components/FeaturedArticle";
import LatestNews from "./components/LatestNews";
import FeaturedVideos from "./components/FeaturedVideos";
import PopularArticles from "./components/PopularArticles";
import Footer from "./components/Footer";
import Tags from "./components/Tags";
import Article from "./components/Article";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeaturedArticle />
                <Tags />
                <div className="container mx-auto flex flex-col md:flex-row gap-8 py-4">
                  <div className="w-full md:w-3/4">
                    <LatestNews />
                  </div>
                  <div className="w-full md:w-1/4">
                    <PopularArticles />
                  </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row gap-8 py-4">
                  <div className="w-full md:w-3/4">
                    <FeaturedVideos />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
