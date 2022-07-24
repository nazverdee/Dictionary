import "./App.css";
import Search from "./Search";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <Search />
    </div>
  );
}

export default App;
