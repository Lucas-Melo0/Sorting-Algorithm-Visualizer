import "./App.css";
import randomArray from "./auxiliary/randomArray";
import HomePage from "./components/HomePage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  console.log(randomArray());

  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
