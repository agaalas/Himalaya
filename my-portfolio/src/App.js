import "./App.css";
import Navbar from "./components/navbar";
import PeronalInfo from "./components/peronal-info";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Portfolio />
    </div>
  );
}

export default App;
