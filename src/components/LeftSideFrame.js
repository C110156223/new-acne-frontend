import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LeftSideFrame.css";

const LeftSideFrame = () => {
  const navigate = useNavigate();

  // const onGroupContainerClick = useCallback(() => {
  //   navigate("/schoolvideo");
  // }, [navigate]);

  const onGroupContainerClick = useCallback((id) => {
    navigate(`/schoolvideo/${id}`);  // You can append the id to the URL if needed
  }, [navigate]);  

  const onOptionClick = useCallback((value) => {
    navigate(value);
  }, [navigate]);
  const radioGroupData = [
    { id: "神經網路", label: "神經網路", value: "/schoolvideo" },
    { id: "卷積神經", label: "卷積神經網路", value: "/schoolvideo" },
    { id: "影像處理", label: "影像處理", value: "/schoolvideo" },
    { id: "YOLOv7", label: "YOLOv7", value: "/schoolvideo" },
    { id: "青春痘", label: "青春痘", value: "/schoolvideo" },
  ];

  return (
    <div className="left-side-frame">
      <div className="student-frame1">
        <div className="background-frame3">
          <div className="rectangle-shape1">
          {radioGroupData.map((item) => (
            <div key={item.id} className="group-div1">
              <input
                type="radio"
                id={item.id}
                className="radio"
                name="groupSelection"
                value={item.value}
                onClick={() => onGroupContainerClick(item.id)} 
              />
              <label htmlFor={item.id}>
                <div >
                  {item.label}
                </div>
              </label>            
            </div>
          ))}

          </div>
        </div>
        <div className="wrapper-stu1">
          <img
            className="stu-icon2"
            loading="eager"
            alt=""
            src="/stu1@2x.png"
          />
        </div>
      </div>
      <img
        className="teacher-icon4"
        loading="eager"
        alt=""
        src="/teacher1@2x.png"
        onClick={() => onOptionClick("/homepage")} 
      />
    </div>
  );
};

export default LeftSideFrame;
