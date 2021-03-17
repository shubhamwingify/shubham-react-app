import './App.css';
import styled from 'styled-components'

const WrapperNew = styled.section`
  padding: 3em;
  background: ${props => props.primary ? "palevioletred" : "white"};;
  font-size: 16px;
`;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Learn react newly updated
            </header>
            <WrapperNew primary>
                First wrapper
            </WrapperNew>
            <WrapperNew>
                Second Wrapper
            </WrapperNew>
        </div>
    );
}

export default App;
