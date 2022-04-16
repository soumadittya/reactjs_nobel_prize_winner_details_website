import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WinnerList from "./components/WinnerList";
import OnePlusNobelWinners from './components/OnePlusNobelWinners';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import prizeDetails from './data/prize.json';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <div className="content">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/list">
              <WinnerList prizeDetails = {prizeDetails}/>
            </Route>
            <Route exact path="/oneplusnobelwinners">
              <OnePlusNobelWinners />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
