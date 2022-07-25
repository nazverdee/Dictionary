import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container" id="container">
      <a href="https://www.shecodes.io/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <Dictionary defaultKeyword="empathy" />
    </div>
  );
}

export default App;
