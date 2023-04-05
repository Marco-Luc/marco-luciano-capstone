import "./ComparePage.scss";
import { useState } from "react";
import axios from "axios";
import RaptorsCard from "../../components/RaptorsCard/RaptorsCard";
import CelticsCard from "../../components/CelticsCard/CelticsCard";

function ComparePage({ raptorsPlayers, celticsPlayers }) {
  const [raptorsCard, setRaptorsCard] = useState(false);
  const [celticsCard, setCelticsCard] = useState(false);
  const [compareStats, setCompareStats] = useState([
    {
      raptorsPlayerPoints: 0,
      celticsPlayerPoints: 0,
    },
    {
      raptorsPlayerAssists: 0,
      celticsPlayerAssists: 0,
    },
    {
      raptorsPlayerRebounds: 0,
      celticsPlayerRebounds: 0,
    },
    {
      raptorsPlayerSteals: 0,
      celticsPlayerSteals: 0,
    },
    {
      raptorsPlayerBlocks: 0,
      celticsPlayerBlocks: 0,
    },
  ]);

  const handleRaptorsCard = (event) => {
    console.log(event.target.value);
    axios
      .get(`http://localhost:2323/players/${event.target.value}`)
      .then((response) => {
        setRaptorsCard(response.data);
        const newCompareStats = [...compareStats];
        newCompareStats[0].raptorsPlayerPoints = response.data.points;
        newCompareStats[1].raptorsPlayerAssists = response.data.assists;
        newCompareStats[2].raptorsPlayerRebounds = response.data.rebounds;
        newCompareStats[3].raptorsPlayerSteals = response.data.steals;
        newCompareStats[4].raptorsPlayerBlocks = response.data.blocks;
        setCompareStats(newCompareStats);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCelticsCard = (event) => {
    console.log(event.target.value);
    axios
      .get(`http://localhost:2323/players/${event.target.value}`)
      .then((response) => {
        setCelticsCard(response.data);
        const newCompareStats = [...compareStats];
        newCompareStats[0].celticsPlayerPoints = response.data.points;
        newCompareStats[1].celticsPlayerAssists = response.data.assists;
        newCompareStats[2].celticsPlayerRebounds = response.data.rebounds;
        newCompareStats[3].celticsPlayerSteals = response.data.steals;
        newCompareStats[4].celticsPlayerBlocks = response.data.blocks;
        setCompareStats(newCompareStats);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(compareStats);

  return (
    <section className="compare-page">
      <div className="compare-section">
        <div className="home-card-container">
          <p className="home-card-container__subtitle">HOME</p>
          <RaptorsCard raptorsCard={raptorsCard} />
          <select
            className="compare-page__dropdown-menus__raptors"
            type="text"
            name="players"
            // value={selectedCard}
            placeholder="Please select"
            onChange={handleRaptorsCard}
          >
            <option>Please select</option>
            {raptorsPlayers.map((raptorsPlayer) => (
              <option key={raptorsPlayer.id} value={raptorsPlayer.id}>
                {raptorsPlayer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="compare-section__score-card">
          <div className="compare-section__score-card-stats-list">
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">Raptors</p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[0].raptorsPlayerPoints === 0
                    ? "default-color"
                    : compareStats[0].raptorsPlayerPoints >
                        compareStats[0].celticsPlayerPoints && raptorsCard
                    ? "green"
                    : compareStats[0].raptorsPlayerPoints ===
                      compareStats[0].celticsPlayerPoints
                    ? "yellow"
                    : "red"
                }`}
              >
                Points:&nbsp;{raptorsCard.points}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[1].raptorsPlayerAssists === 0
                    ? "default-color"
                    : compareStats[1].raptorsPlayerAssists >
                        compareStats[1].celticsPlayerAssists && raptorsCard
                    ? "green"
                    : compareStats[1].raptorsPlayerAssists ===
                      compareStats[1].celticsPlayerAssists
                    ? "yellow"
                    : "red"
                }`}
              >
                Assists:&nbsp;{raptorsCard.assists}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[2].raptorsPlayerRebounds === 0
                    ? "default-color"
                    : compareStats[2].raptorsPlayerRebounds >
                        compareStats[2].celticsPlayerRebounds && raptorsCard
                    ? "green"
                    : compareStats[2].raptorsPlayerRebounds ===
                      compareStats[2].celticsPlayerRebounds
                    ? "yellow"
                    : "red"
                }`}
              >
                Rebounds:&nbsp;{raptorsCard.rebounds}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[3].raptorsPlayerSteals === 0
                    ? "default-color"
                    : compareStats[3].raptorsPlayerSteals >
                        compareStats[3].celticsPlayerSteals && raptorsCard
                    ? "green"
                    : compareStats[3].raptorsPlayerSteals ===
                      compareStats[3].celticsPlayerSteals
                    ? "yellow"
                    : "red"
                }`}
              >
                Steals:&nbsp;{raptorsCard.steals}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[4].raptorsPlayerBlocks === 0
                    ? "default-color"
                    : compareStats[4].raptorsPlayerBlocks >
                        compareStats[4].celticsPlayerBlocks && raptorsCard
                    ? "green"
                    : compareStats[4].raptorsPlayerBlocks ===
                      compareStats[4].celticsPlayerBlocks
                    ? "yellow"
                    : "red"
                }`}
              >
                Blocks:&nbsp;{raptorsCard.blocks}
              </p>
            </div>
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">Celtics</p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[0].celticsPlayerPoints === 0
                    ? "default-color"
                    : compareStats[0].celticsPlayerPoints >
                        compareStats[0].raptorsPlayerPoints && raptorsCard
                    ? "green"
                    : compareStats[0].celticsPlayerPoints ===
                      compareStats[0].raptorsPlayerPoints
                    ? "yellow"
                    : "red"
                }`}
              >
                Points:&nbsp;{celticsCard.points}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[1].celticsPlayerAssists === 0
                    ? "default-color"
                    : compareStats[1].celticsPlayerAssists >
                        compareStats[1].raptorsPlayerAssists && raptorsCard
                    ? "green"
                    : compareStats[1].celticsPlayerAssists ===
                      compareStats[1].raptorsPlayerAssists
                    ? "yellow"
                    : "red"
                }`}
              >
                Assists:&nbsp;{celticsCard.assists}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[2].celticsPlayerRebounds === 0
                    ? "default-color"
                    : compareStats[2].celticsPlayerRebounds >
                        compareStats[2].raptorsPlayerRebounds && raptorsCard
                    ? "green"
                    : compareStats[2].celticsPlayerRebounds ===
                      compareStats[2].raptorsPlayerRebounds
                    ? "yellow"
                    : "red"
                }`}
              >
                Rebounds:&nbsp;
                {celticsCard.rebounds}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[3].celticsPlayerSteals === 0
                    ? "default-color"
                    : compareStats[3].celticsPlayerSteals >
                        compareStats[3].raptorsPlayerSteals && raptorsCard
                    ? "green"
                    : compareStats[3].celticsPlayerSteals ===
                      compareStats[3].raptorsPlayerSteals
                    ? "yellow"
                    : "red"
                }`}
              >
                Steals:&nbsp;
                {celticsCard.steals}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[4].celticsPlayerBlocks === 0
                    ? "default-color"
                    : compareStats[4].celticsPlayerBlocks >
                        compareStats[4].raptorsPlayerBlocks && raptorsCard
                    ? "green"
                    : compareStats[4].celticsPlayerBlocks ===
                      compareStats[4].raptorsPlayerBlocks
                    ? "yellow"
                    : "red"
                }`}
              >
                Blocks:&nbsp;
                {celticsCard.blocks}
              </p>
            </div>
          </div>
        </div>
        <div className="away-card-container">
          <p className="away-card-container__subtitle">AWAY</p>
          <CelticsCard celticsCard={celticsCard} />
          <select
            className="compare-page__dropdown-menus__celtics"
            type="text"
            // value={selectedCard2}
            placeholder="Please select"
            onChange={handleCelticsCard}
          >
            <option>Please select</option>
            {celticsPlayers.map((celticsPlayer) => (
              <option key={celticsPlayer.id} value={celticsPlayer.id}>
                {celticsPlayer.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default ComparePage;

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
