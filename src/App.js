import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Selection from "./pages/selection";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/selection" component={Selection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
