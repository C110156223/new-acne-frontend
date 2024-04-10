import "./InnerFrame.css";

const InnerFrame = ({ prop }) => {
  return (
    <header className="inner-frame">
      <div className="detect-logo2">
        <div className="detect-logo-item" />
        <div className="div30">{prop}</div>
      </div>
    </header>
  );
};

export default InnerFrame;
