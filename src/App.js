import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Selection from "./pages/selection";
import Procurement from "./pages/procurememt";
import AfterConstruction from "./pages/after-construction";
import DuringConstruction from "./pages/during-construction";
import InManagement from "./pages/in-management";
import Ponding from "./pages/ponding";
import Cracks from "./pages/cracks";
import Peeling from "./pages/peeling";
import Efflorescence from "./pages/efflorescence";

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
          >
            <Route
              exact
              path="/selection/after-construction"
              component={AfterConstruction}
            ></Route>
            <Route
              path="/selection/after-construction/ponding"
              component={Ponding}
            />
            <Route
              path="/selection/after-construction/cracks"
              component={Cracks}
            />
            <Route
              path="/selection/after-construction/peeling"
              component={Peeling}
            />
            <Route
              path="/selection/after-construction/efflorescence"
              component={Efflorescence}
            />
          </Route>

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
