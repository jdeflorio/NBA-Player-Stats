import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const SearchBar = styled.input`
  border: none;
  background: none;
  outline: none;
  color: inherit;
  font-size: 2rem;
  height: 40px;
  padding: 5px 5px 10px;
  border-bottom: 1px solid;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const SearchBtn = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 15px 20px;
  margin-left: 15px;
  border-radius: 5px;
  background: #ff1e42;
  transition: background 0.3s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background: #c3112d;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
`;

function Search(props) {
  const { player, setPlayer, handleClick } = props;
  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search a Player"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
      ></SearchBar>
      <SearchBtn onClick={handleClick}>Search</SearchBtn>
    </SearchContainer>
  );
}

export default Search;
