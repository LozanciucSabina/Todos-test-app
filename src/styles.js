import styled, { createGlobalStyle } from "styled-components";
import cross from "./images/cross-icn.png";
import crossHover from "./images/cross-icn-hover.png";
import check from "./images/check-icn.png";

const white = "#fff";
const veryLightGrey = "#e4e4e4";
const lightGrey = "#00000026";
const grey = "#686868";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

body, html {
    background-color: #f3f3f3;
    font-family: "Montserrat", sans-serif;  
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  outline: none;
  margin: calc(1rem + 1vw);
  cursor: pointer;

  div {
    width: 20px;
    height: 20px;
    margin: auto;
    background-size: contain;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: calc(69px + 3vw);
  font-weight: 100;
  color: #e6d4d5;
  margin: 1rem auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  font-family: "Montserrat", sans-serif;
  font-size: calc(18px + 1vw);
  color: ${grey};
  text-indent: calc(16px + 2vw);
  border: none;
  border-bottom: 1px solid ${lightGrey};
  outline: none;

  &::placeholder {
    font-style: italic;
    color: ${veryLightGrey};
  }
`;

export const StyledTodoSection = styled.div`
  width: calc(100px + 58vw);
  position: relative;
  background-color: ${white};
  margin: 0 auto 5rem auto;
  box-shadow: 0px 10px 10px ${lightGrey};
`;

export const StyledTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid ${lightGrey};

  &:hover button:last-child {
    display: inline;
  }
`;

export const ToggleButton = styled(Button)`
  border: 1.5px solid;
  border-color: ${({ isChecked }) => (isChecked ? `#439f47bf` : veryLightGrey)};
  border-radius: 50%;

  div {
    display: ${({ isChecked }) => (!isChecked ? `none` : `block`)};
    background-image: url(${check});
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: calc(18px + 1vw);
  ${({ isChecked }) =>
    isChecked
      ? ` text-decoration: line-through;
          color: ${veryLightGrey};`
      : `color: ${grey};`};
  margin-right: auto;
`;

export const RemoveButton = styled(Button)`
  display: none;

  div {
    background-image: url(${cross});

    &:hover {
      background-image: url(${crossHover});
    }
  }
`;

export const StyledFooter = styled.div`
  height: 40px;
  margin: 10px calc(1rem + 1vw);
  line-height: 40px;
  font-size: calc(15px + 1vw);
  font-weight: 300;
`;

export const OverlappedNote = styled.div`
  width: calc(100px + 58vw - ${({ width }) => width});
  height: 5px;
  background: ${white};
  margin: 0 auto;
  transform: translate(0, 200%);
  box-shadow: inset 0px 1px 2px ${lightGrey};
`;
