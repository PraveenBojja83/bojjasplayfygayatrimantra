import React from "react";
import "./AudioPlayerBar.css";

const AudioPlayerBar = ({ src }) => (
  <div className="audio-player-bar-native">
    <audio
      src={src}
      controls controlsList="nodownload"
      style={{ borderRadius: "10px", border: "1px solid #ccc", width: "100%" }}
    />
  </div>
);

export default AudioPlayerBar;
