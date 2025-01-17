import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <main>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </main>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 5px;
    margin-left : 20px ;
  }
  p {
    font-size: 20px;
    font-weight: 500px;
    margin-top: 0;
    margin-left: 20px;
  }
`;