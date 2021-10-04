import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Selection from "./pages/selection";
import Procurement from "./pages/procurememt";
import AfterConstruction from "./pages/after-construction";
import DuringConstruction from "./pages/during-construction";
import InManagement from "./pages/in-management";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/selection" component={Selection}>
          <Route exact path="/selection" component={Selection} />
          <Route path="/selection/procurement" component={Procurement} />
          <Route
            path="/selection/after-construction"
            component={AfterConstruction}
          />
          <Route
            path="/selection/during-construction"
            component={DuringConstruction}
          />
          <Route path="/selection/in-management" component={InManagement} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
