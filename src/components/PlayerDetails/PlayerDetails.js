import "./PlayerDetails.scss";

function PlayerDetails(props) {
  return (
    <div className="player-details">
      <img src={props.song.img_src} alt="" />
      <h3 className="player-details__title">{props.song.title}</h3>
      <h4 className="player-details__artist">{song.artist}</h4>
    </div>
  );
}

export default PlayerDetails;
