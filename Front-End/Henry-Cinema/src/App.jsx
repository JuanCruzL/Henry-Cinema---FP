//import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
//import Movies from "./Components/Movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Switch>
        <Route extact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
      </Switch> */}
    </div>
  );
}

export default App;
