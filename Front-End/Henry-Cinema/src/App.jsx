//import { Route, Switch } from "react-router-dom";
import Details from "./Components/Details/Details";
//import Movies from "./Components/Movies";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Details/>
      {/* <Switch>
        <Route extact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
      </Switch> */}
    </div>
  );
}

export default App;
