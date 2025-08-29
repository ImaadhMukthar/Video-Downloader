import { useState, useEffect } from "react";

const Downloader = () => {
  const [videoURL, setVideoURL] = useState("");
  const [resolutions, setResolutions] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [theme, setTheme] = useState("dark");

  document.documentElement.setAttribute('data-theme', 'dark'); // Setting default theme to dark

  useEffect(() => {
    const changeTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.body.setAttribute("data-theme", newTheme);
    };

    document
      .querySelector(".theme-switch")
      .addEventListener("click", changeTheme);
    return () => {
      document
        .querySelector(".theme-switch")
        .removeEventListener("click", changeTheme); // Cleanup
    };
  }, [theme]);

  return (
    <div className="container">
      <nav className="navbar">
        <button className="theme-switch">sw</button>
      </nav>
      <div className="main-content">
        <h1 className="main-text">The Easiest Way to Download Videos</h1>
        <p className="sub-text">
          Paste any video link from popular platforms and download it in your
          desired quality. Fast, free, and simple.
        </p>

        <div className="control-panel">
          <input
            type="text"
            className="url-bar"
            placeholder="Paste any video link from popular platforms and download it in your desired quality. Fast, free, and simple."
            value=""
          />

          <p className="select-resolution">Select Resolution</p>
          <div className="resolution-options">
            {resolutions.map((resolution) => (
              <button key={resolution} className="resolution-option">
                {resolution}
              </button>
            ))}
          </div>

          <div className="download-progress">
            <p>
              Download Status:{" "}
              {isDownloading ? "Downloading" : "Ready to Download"}
            </p>
            <p className="download-percentage">0%</p>
            <div className="progress-bar-outer">
              <div className="progress-bar-inner"></div>
            </div>
            <p className="download-message">
              Please wait, this may take a few moments
            </p>
          </div>
          <button className="download-button">Start Download</button>
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">© 2024 VideoGrabber. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Downloader;
