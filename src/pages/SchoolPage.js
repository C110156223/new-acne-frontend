import InnerFrame from "../components/InnerFrame";
import LeftSideFrame from "../components/LeftSideFrame";
import "./SchoolPage.css";

const SchoolPage = () => {
  return (
    <div className="schoolpage">
      <img className="bkground-icon1" alt="" src="/bkground@2x.png" />
      <InnerFrame prop="數位小學堂" />
      <LeftSideFrame />
    </div>
  );
};

export default SchoolPage;
