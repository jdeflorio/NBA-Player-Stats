import styled from "styled-components";

const PlayerStatsDiv = styled.div`
  margin: 25px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #c3112d;
  border-radius: 25px;
  display: flex;
  height: 325px;
  width: 75vw;
  background: #708090;

  @media (max-width: 900px) {
    height: 280px;
    flex-direction: column;
    margin-bottom: 25px;
    border-radius: 0;
  }
`;

const PlayerImg = styled.img`
  border-right: 2px solid #c3112d;
  width: auto;
  height: 100%;

  @media (max-width: 700px) {
    height: 100%;
    width: auto;
    max-height: 190px;
    flex-direction: column;
    border: 0;
    border-bottom: 2px solid #c3112d;
  }
`;

const AvgsDiv = styled.div`
  width: 100%;
  display: flex;
  min-width: 0;
`;

const AvgsItem = styled.div`
  border-right: 2px solid #c3112d;
  width: 100%;
  min-width: 0;

  &:last-child {
    border-right: 0;
  }
`;

const StatsLabel = styled.p`
  border-bottom: 2px solid #c3112d;
  padding: 8px 0;
  margin: 0;
  font-size: 25px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const StatsVal = styled.p`
  font-size: 50px;
  margin: 0px;
  display: flex;
  justify-content: center;
  padding: 70px 0;

  @media (max-width: 700px) {
    padding: 0;
    margin: 12px;
    font-size: 22px;
  }
`;

function PlayerStats(props) {
  const stats = props.data;

  return (
    <PlayerStatsDiv>
      <PlayerImg
        src={
          stats?.imgSrc ||
          `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/520x380/203507.png`
        }
      ></PlayerImg>
      <AvgsDiv>
        <AvgsItem>
          <StatsLabel>PPG</StatsLabel>
          <StatsVal>{stats?.ppg}</StatsVal>
        </AvgsItem>
        <AvgsItem>
          <StatsLabel>RPG</StatsLabel>
          <StatsVal>{stats?.rpg}</StatsVal>
        </AvgsItem>
        <AvgsItem>
          <StatsLabel>APG</StatsLabel>
          <StatsVal>{stats?.apg}</StatsVal>
        </AvgsItem>
        <AvgsItem>
          <StatsLabel>FG%</StatsLabel>
          <StatsVal>{(stats?.fg * 100).toPrecision(3)}</StatsVal>
        </AvgsItem>
        <AvgsItem>
          <StatsLabel>3P%</StatsLabel>
          <StatsVal>{(stats?.fg3 * 100).toPrecision(3)}</StatsVal>
        </AvgsItem>
      </AvgsDiv>
    </PlayerStatsDiv>
  );
}

export default PlayerStats;
