
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchoolPage from "./pages/SchoolPage";
import DetectPage from "./pages/DetectPage";
import ConsolPage from "./pages/ConsolPage";
import GamePage from "./pages/GamePage";
import SchoolVideo from "./pages/SchoolVideo";
import SchoolQuiz from "./pages/SchoolQuiz";

function App() {
  const [title, setTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/meta${pathname}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTitle(data.title);
        setMetaDescription(data.metaDescription);
      } catch (error) {
        console.error("Error fetching meta data:", error);
      }
    };

    fetchData();
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/schoolpage" element={<SchoolPage />} />
        <Route path="/detectpage" element={<DetectPage />} />
        <Route path="/consolpage/:id" element={<ConsolPage />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/schoolvideo/:topic" element={<SchoolVideo />} />
        <Route path="/schoolquiz/:topic" element={<SchoolQuiz />} />
      </Routes>
      {/* 設置網頁標題和 meta 描述 */}
      {title && <title>{title}</title>}
      {metaDescription && (
        <meta name="description" content={metaDescription} />
      )}
    </div>
  );
}

export default App;