import PlayerStats from "./components/playerStats";
import Search from "./components/search";
import RecentGame from "./components/recentGame";
import NoResults from "./components/noResults";
import { useState, useEffect } from "react";
import playerIds from "./playerIds";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  const [player, setPlayer] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const handleClick = async () => {
    try {
      //Fetching Player Stats
      const playerInfo = await (
        await fetch(
          `https://www.balldontlie.io/api/v1/players?search=${player}`
        )
      ).json();

      //Get first and last name for img get
      const firstName = playerInfo?.data[0].first_name;
      const lastName = playerInfo?.data[0].last_name;
      const playerId = playerInfo?.data[0].id;

      const statsData = await (
        await fetch(
          `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`
        )
      ).json();

      if (statsData.data.length === 0) {
        throw new Error("No current season data");
      }

      //get recent game data
      const recentGameData = await (
        await fetch(
          `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}&seasons[]=2022&per_page=82`
        )
      ).json();

      const gameId = recentGameData.data.pop().game.id;

      const recentGameScore = await (
        await fetch(`https://www.balldontlie.io/api/v1/games/${gameId}`)
      ).json();

      //Get PlayerID to match nba player picture
      const imgId = playerIds.find((player) => {
        return player.firstName === firstName && player.lastName === lastName;
      })?.id;

      const imgSrc = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/520x380/${imgId}.png`;

      const data = {
        imgSrc: imgSrc,
        recentGameData: recentGameData.data.pop(),
        recentGameScore: recentGameScore,
        ppg: statsData?.data[0]?.pts,
        rpg: statsData?.data[0]?.reb,
        apg: statsData?.data[0]?.ast,
        fg: statsData?.data[0]?.fg_pct,
        fg3: statsData?.data[0]?.fg3_pct
      };

      setData(data);
      setInitialLoad(false);
    } catch (err) {
      setInitialLoad(false);
      setData(null);
      console.log(err.message);
    }
  };

  return (
    <div className="App">
      <h1> NBA Player Stats </h1>
      <Search
        player={player}
        setPlayer={setPlayer}
        handleClick={handleClick}
      ></Search>
      {data ? (
        <>
          <PlayerStats data={data}></PlayerStats>
          <RecentGame data={data}></RecentGame>
        </>
      ) : (
        initialLoad || <NoResults></NoResults>
      )}
    </div>
  );
}
