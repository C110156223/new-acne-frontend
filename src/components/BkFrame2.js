import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BkFrame2.css";

const BkFrame2 = ({ selectedId }) => {
  const navigate = useNavigate();
  const [textData, setTextData] = useState("");

  const fetchTextData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/textData/${selectedId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTextData(data.text);
    } catch (error) {
      console.error("Error fetching text data:", error);
    }
  };

  useEffect(() => {
    if (selectedId) {
      fetchTextData();
    }
  }, [selectedId]);
  console.log(selectedId)

  const onButtonContainerClick = () => {
    navigate("/detectpage");
  };

  return (
    <div className="bk-frame1">
      <div className="border-frame1">
        <div className="border-frame-child" />
        <div className="rectangle-parent1">
          <div className="frame-child1" />
          {/* 使用 selectedId 來動態生成圖片路徑 */}
          <img className="div32" src={`/detectpic/${selectedId}.png`} alt="圖片" />
        </div>
        <div className="div33">{textData}</div>
        <div className="button-wrapper">
          <div className="button" onClick={onButtonContainerClick}>
            <div className="back1" />
            <div className="div34">重新選擇</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkFrame2;