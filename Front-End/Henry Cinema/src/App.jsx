import { Route, Switch } from "react-router-dom";
import Movies from "./Components/Movies";

function App() {
  return (
    <div>
      <Switch>
        <Route extact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
