import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <Dictionary />
    </div>
  );
}

export default App;
