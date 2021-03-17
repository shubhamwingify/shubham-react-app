import './App.css';
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 3em;
  background: papayawhip;
  font-size: 10px;
`;

const NewWrapper = styled.section`
  padding: 9em;
  background: red;
`;

function App() {
  return (
    <Wrapper>
        <div className="App">
            <header className="App-header">
                Learn react newly updated
            </header>
            <NewWrapper>
                Hello
            </NewWrapper>
        </div>
    </Wrapper>
  );
}

export default App;
