import styled from "styled-components";

const NavBar = styled.div`
  background-color: lightblue;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const WrapperNew = styled.section`
  & .blue {
    color: blue;
  }

  & .red {
    color: red;
  }

  padding: 3em;
  background: ${props => props.primary ? "palevioletred" : "red"};
  font-size: ${props => props.big ? "18px" : "16px"};
`;

export {
    WrapperNew,
    NavBar
}