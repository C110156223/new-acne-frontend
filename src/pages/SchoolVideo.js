import InnerFrame from "../components/InnerFrame";
import SecondaryFrame from "../components/SecondaryFrame";
import { useParams } from "react-router-dom";
import "./SchoolVideo.css";

const SchoolVideo = () => {
  const topic = useParams();

  return (
    <div className="schoolvideo">
      <img className="bkground-icon5"  src="/bkground@2x.png" />
      <InnerFrame prop={topic.topic} />
      <SecondaryFrame />
    </div>
  );
};

export default SchoolVideo;
