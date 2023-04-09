import "./MusicPlayer.scss";
import { useState } from "react";

function MusicPlayer() {
  const [songs, setSongs] = useState([
    {
      title: "Shadow",
      artist: "The Worst Band Ever",
      src: "../../assets/Music/01 Shadow.m4a",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="player">
      <audio></audio>
      <h4 className="player__heading">Playing Now</h4>
      <p className="player__subheading">Beats by Marco Luciano</p>
    </div>
  );
}

export default MusicPlayer;
