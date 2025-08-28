import { useState, useEffect } from "react";

const Downloader = () => {
    const [videoURL, setVideoURL] = useState("");
    const [isDownloading, setIsDownloading] = useState(false);

    return (
        <div className="container">
            <nav className="navbar"></nav>
            <div className="main-content">
                <h1 className="main-text">The Easiest Way to Download Videos</h1>
                <p className="sub-text">Paste any video link from popular platforms and download it in your desired quality. Fast, free, and simple.</p>

                <div className="control-panel">
                    <input type="text" className="url-bar" placeholder="Paste any video link from popular platforms and download it in your desired quality. Fast, free, and simple." value="" />

                    <p className="select-resolution">Select Resolution</p>
                    <div className="resolution-options">

                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Downloader;