import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How To Play Dice Game?</h2>
        <div className="text">
            <p>1. Select any number.</p>
            <p>2. Click on dice image.</p>
            <p>3. After clicking, if selected number is equal to the dice number, you will get the same point as the dice.</p>
            <p>4. If you get wrong guess then 2 points will be deducted.</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 20px;
    border-radius: 25px;
    background-color: #fbf1f1;
    padding: 20px;
    
    h2 {
        font-size: 24px;
        font-weight: bold;
    }

    .text {
        margin-top: 24px;

    }
`