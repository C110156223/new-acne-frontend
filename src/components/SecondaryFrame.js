// import { useCallback } from "react";
// import { useNavigate,useParams  } from "react-router-dom";
// import "./SecondaryFrame.css";

// const SecondaryFrame = () => {
//   const topic = useParams();
//   const navigate = useNavigate();

//   const onGroupContainerClick = useCallback(() => {
//     navigate("/schoolpage");
//   }, [navigate]);

//   const onGroupContainer1Click = useCallback((id) => {
//     navigate(`/schoolquiz/${id}`);
//   }, [navigate]);

//   const onTeacherImageClick = useCallback(() => {
//     navigate("/homepage");
//   }, [navigate]);

//   return (
//     <div className="secondary-frame1">
//       <div className="tertiary-frame">
//         <div className="quiz-background">
//           <div className="back-button-frame">
//             <div>
//               <iframe src='https://www.youtube.com/embed/AHZXFZCzXEg?si=jeYuBjdOsobfiEaj'
//                 frameborder='0'
//                 className="videoframe"
//                 />
//               </div>
//             <div className="back-button-frame-child" />
//             <div className="page-navigation-group">
//               <div className="container" onClick={onGroupContainerClick}>
//                 <div className="div36">回上頁{}</div>
//                 <div className="back3" />
//               </div>              
//               <div className="parent1" onClick={() =>onGroupContainer1Click(topic.topic)}>
//                 <div className="div37">小測驗</div>
//                 <div className="quiz1" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="wrapper-stu2">
//           <img
//             className="stu-icon3"
//             loading="eager"
//             alt=""
//             src="/stu1@2x.png"
//           />
//         </div>
//       </div>
//       <img
//         className="teacher-icon6"
//         loading="eager"
//         alt=" "
//         src="/teacher1@2x.png"
//         onClick={onTeacherImageClick}
//       />
//     </div>
//   );
// };

// export default SecondaryFrame;

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SecondaryFrame.css";

const SecondaryFrame = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const params = useParams();
  const topic = params.topic;
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/schoolpage");
  }, [navigate]);

  const onGroupContainer1Click = useCallback((id) => {
    navigate(`/schoolquiz/${id}`);
  }, [navigate]);

  const onTeacherImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  useEffect(() => {
    const fetchVideoSrc = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/video/${topic}`);
        console.log(topic)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVideoSrc(data.videoSrc);
      } catch (error) {
        console.error("Error fetching video source:", error);
      }
    };

    fetchVideoSrc();
  }, [topic]);

  return (
    <div className="secondary-frame1">
      <div className="tertiary-frame">
        <div className="quiz-background">
          <div className="back-button-frame">
            <div>
              <iframe
                src={videoSrc}
                frameBorder="0"
                className="videoframe"
              />
            </div>
            <div className="back-button-frame-child" />
            <div className="page-navigation-group">
              <div className="container" onClick={onGroupContainerClick}>
                <div className="div36">回上頁{}</div>
                <div className="back3" />
              </div>
              <div
                className="parent1"
                onClick={() => onGroupContainer1Click([topic])}
              >
                <div className="div37">小測驗</div>
                <div className="quiz1" />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-stu2">
          <img
            className="stu-icon3"
            loading="eager"
            alt=""
            src="/stu1@2x.png"
          />
        </div>
      </div>
      <img
        className="teacher-icon6"
        loading="eager"
        alt=" "
        src="/teacher1@2x.png"
        onClick={onTeacherImageClick}
      />
    </div>
  );
};

export default SecondaryFrame;
