import logo from './logo.svg';
import './App.css';
import MyHiddenComponent from './example/MyHiddenComponent';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }

    * {
        margin-bottom: 10px;
    }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      You whould not see the component below:
      <MyHiddenComponent>This text will not be visible</MyHiddenComponent>
    </div>
  );
}

export default App;
