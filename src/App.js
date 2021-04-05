import './App.css';
import styled from 'styled-components'
import {Link} from "react-router-dom";

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

function App() {
    return (
        <div className="App">
            <NavBar>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact us </Link>
            </NavBar>
            <header className="App-header">
                Learn react newly updated
            </header>
            <WrapperNew primary big>
                <p>
                    first wrapper first
                </p>
            </WrapperNew>
            <WrapperNew big className={"blue my-custom-shubham-class"}>
                <div>
                    First wrapper with class
                </div>
            </WrapperNew>
            <WrapperNew primary big>
               <p>
                   Second Wrapper
               </p>
            </WrapperNew>
        </div>
    );
}

export default App;
