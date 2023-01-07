import styled from "styled-components";

const RecentGameDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #c3112d;
  border-right: 0;
  border-top: 0;
  display: flex;
  height: 250px;
  width: 50%;
  background: #708090;

  @media (max-width: 900px) {
    height: 300px;
    flex-direction: column;
  }
`;

const GameTitle = styled.h2`
  padding: 0;
  margin-bottom: 0;

  @media (max-width: 700px) {
    font-size: 20px;
    margin: 0;
  }
`;

const TeamDiv = styled.div`
  font-size: 24px;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const GameScoreDiv = styled.div`
  display: grid;
  border-right: 2px solid #c3112d;
  border-top: 2px solid #c3112d;
  width: 30%;

  @media (max-width: 700px) {
    height: 50%;
    width: auto;
    max-height: 190px;
    flex-direction: column;
    border-bottom: 0;
  }
`;

const GameStatsDiv = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 50;
  min-width: 0;
`;

const StatsItem = styled.div`
  border-right: 2px solid #c3112d;
  width: 16.37%;
  min-width: 0;

  @media (max-width: 700px) {
    width: 23.932%;
  }
`;

const StatsLabel = styled.p`
  border-bottom: 2px solid #c3112d;
  border-top: 2px solid #c3112d;
  margin: 0;
  font-size: 25px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const StatsVal = styled.p`
  font-size: 50px;
  margin: 0px;
  padding-top: 10px;

  @media (max-width: 700px) {
    font-size: 18px;
    padding: 10px 0;
  }
`;

function RecentGame(props) {
  const recentGameData = props.data?.recentGameData;
  const recentGameScore = props.data?.recentGameScore;

  return (
    <RecentGameDiv>
      <GameScoreDiv>
        <GameTitle>Recent Game</GameTitle>
        <TeamDiv>
          {recentGameScore.visitor_team.abbreviation}{" "}
          {recentGameScore.visitor_team_score}
        </TeamDiv>
        @
        <TeamDiv>
          {recentGameScore.home_team.abbreviation}{" "}
          {recentGameScore.home_team_score}
        </TeamDiv>
      </GameScoreDiv>
      <GameStatsDiv>
        <StatsItem>
          <StatsLabel>PTS</StatsLabel>
          <StatsVal>{recentGameData?.pts}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>REB</StatsLabel>
          <StatsVal>{recentGameData?.reb}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>AST</StatsLabel>
          <StatsVal>{recentGameData?.ast}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>STL</StatsLabel>
          <StatsVal>{recentGameData?.stl}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>BLK</StatsLabel>
          <StatsVal>{recentGameData?.blk}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>TO</StatsLabel>
          <StatsVal>{recentGameData?.turnover}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>FGM</StatsLabel>
          <StatsVal>{recentGameData?.fgm}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>FGA</StatsLabel>
          <StatsVal>{recentGameData?.fga}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>FG%</StatsLabel>
          <StatsVal>{(recentGameData?.fg_pct * 100).toPrecision(3)}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>3PM</StatsLabel>
          <StatsVal>{recentGameData?.fg3m}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>3PA</StatsLabel>
          <StatsVal>{recentGameData?.fg3a}</StatsVal>
        </StatsItem>
        <StatsItem>
          <StatsLabel>3P%</StatsLabel>
          <StatsVal>{(recentGameData?.fg3_pct * 100).toPrecision(3)}</StatsVal>
        </StatsItem>
      </GameStatsDiv>
    </RecentGameDiv>
  );
}

export default RecentGame;
