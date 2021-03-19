import './App.css';
import styled from 'styled-components'

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
            <header className="App-header">
                Learn react newly updated
            </header>
            <WrapperNew primary big>
                first wrapper first
            </WrapperNew>
            <WrapperNew big className={"blue my-custom-shubham-class"}>
                First wrapper with class
            </WrapperNew>
            <WrapperNew primary big>
                Second Wrapper
            </WrapperNew>
        </div>
    );
}

export default App;
