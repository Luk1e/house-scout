import "./styles.scss";

function LoaderComponent() {
  return (
    <div className="loader-Container">
      <div className="loader-container">
        <div className="loader">
          <div className="inner one !border-b-[#F93B1D]"></div>
          <div className="inner two !border-r-[#F93B1D]"></div>
          <div className="inner three !border-t-[#F93B1D]"></div>
        </div>
      </div>
    </div>
  );
}

export default LoaderComponent;
