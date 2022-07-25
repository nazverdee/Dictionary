import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container" id="container">
      <h1 className="title">Encyclopedia</h1>
      <Dictionary defaultKeyword="empathy" />
    </div>
  );
}

export default App;
