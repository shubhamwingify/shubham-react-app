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
            <div>
                Home
            </div>
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
