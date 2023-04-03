import "./ComparePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
// import PlaceholderCard from "../../components/PlaceholderCard/Placeholdercard";
import RaptorsCard from "../../components/RaptorsCard/RaptorsCard";
import CelticsCard from "../../components/CelticsCard/CelticsCard";

//Step 1:

//pass down info I need from this call to the card components as props
// for the dropdown: we'll need to filter through the array to get data for
// the drop down menu - this would just be the names of the players
// split the array into two (raptors players and celtics)

//Step 2: (reliant on something being selected in dropdown menu)

//find object where it matches the selected drop down, store that in
// selectedraptorsplayer
//selected raptors = response.data (this is the entire array)
//then use .find where for each card
//card.name === the prop that is passed through from the dropdown menu
//that should return the single object from the array
//that is now selectedRaptors player
//in return - selectedRaptorsPlayer.name, .description, etc
// filter through the array to grab the specific raptors players, from there I can pass
// player.name, player.description to components.
// pass down this entire object to my card component - from there, in the component I would destructure it and have access
// to all the key value pairs

//Displaying the card :
// Shouldnt need to use state for selectedCard and setSelectedCard , variables are better. get these from step 2
// card 1 should be raptors card and card 2 is celtics card.
// Will need to do step 2 twice - once for the raptors and once for the celtics

function ComparePage() {
  // const [selectedCard, setSelectedCard] = useState("card1");
  // const [selectedCard2, setSelectedCard2] = useState("card2");

  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2323/players", {})
      .then((response) => {
        setPlayerList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!playerList) {
    return <h1>Loading...</h1>;
  }

  const raptorsPlayers = playerList.filter(
    (player) => player.team === "raptors"
  );
  console.log(raptorsPlayers);

  const celticsPlayers = playerList.filter(
    (player) => player.team === "celtics"
  );
  console.log(celticsPlayers);

  // const handleCard = (event) => {
  //   setSelectedCard(event.target.value);
  // };

  // const handleCard2 = (event) => {
  //   setSelectedCard2(event.target.value);
  // };

  return (
    <section className="compare-page">
      <h2 className="compare-page__header">Compare Stats</h2>
      <div className="compare-section">
        {/* {selectedCard === "card1" && <RaptorsCard />} */}
        <div className="compare-section__score-card">
          <div className="compare-section__score-card-stats-list">
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">Raptors</p>
              <p className="compare-section__score-card-stat">Points:</p>
              <p className="compare-section__score-card-stat">Assists:</p>
              <p className="compare-section__score-card-stat">Rebounds: </p>
              <p className="compare-section__score-card-stat">Steals: </p>
              <p className="compare-section__score-card-stat">Blocks: </p>
            </div>
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">Celtics</p>
              <p className="compare-section__score-card-stat">Points:</p>
              <p className="compare-section__score-card-stat">Assists: </p>
              <p className="compare-section__score-card-stat">Rebounds: </p>
              <p className="compare-section__score-card-stat">Steals: </p>
              <p className="compare-section__score-card-stat">Blocks: </p>
            </div>
          </div>
        </div>
        {/* {selectedCard2 === "card2" && <CelticsCard />} */}
      </div>
      <div className="compare-page__dropdown-menus">
        <select
          className="compare-page__dropdown-menus__raptors"
          type="text"
          name="players"
          // value={selectedCard}
          placeholder="Please select"
          // onChange={handleCard}
        >
          <option>Please select</option>
          {raptorsPlayers.map((raptorsPlayer) => (
            <option key={raptorsPlayer.id} value={raptorsPlayer.name}>
              {raptorsPlayer.name}
            </option>
          ))}
        </select>
        <select
          className="compare-page__dropdown-menus__celtics"
          type="text"
          // value={selectedCard2}
          placeholder="Please select"
          // onChange={handleCard2}
        >
          <option>Please select</option>
          {celticsPlayers.map((celticsPlayer) => (
            <option key={celticsPlayer.id} value={celticsPlayer.name}>
              {celticsPlayer.name}
            </option>
          ))}
        </select>
      </div>
      <div className="compare-page__button-section">
        <button className="compare-page__button-section-button">
          Compare Stats
        </button>
      </div>
    </section>
  );
}

export default ComparePage;
