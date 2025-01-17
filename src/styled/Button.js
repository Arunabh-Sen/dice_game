import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 200px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.2s background ease-in;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  margin-left: 290px;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s background ease-in;
    font-weight: bold;
  }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
      &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    font-weight: bold;
  }
`