import styled from "styled-components"

const RollDice = ({
  rollDice, currentDice
}) => {



  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 20px;
  }
`