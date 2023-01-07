import styled from "styled-components";

const NoResultsDiv = styled.div`
  padding-top: 200px;
  font-size: 30px;
`;

function NoResults(props) {
  return (
    <NoResultsDiv>
      No Results <br></br> Check spelling or try entering in full name
    </NoResultsDiv>
  );
}

export default NoResults;
