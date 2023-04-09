import "./MusicPlayer.scss";
import PlayerDetails from "../PlayerDetails/PlayerDetails";

function MusicPlayer(props) {
  return (
    <div className="player">
      <audio></audio>
      <h4 className="player__heading">Playing Now</h4>
      <PlayerDetails song={props.song} />
      <p className="player__subheading">
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
}

export default MusicPlayer;
