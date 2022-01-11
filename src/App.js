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
import PerceivedCommitment from "./pages/perceived-commitment";
import QualitySystem from "./pages/quality-system";
import QualityManagement from "./pages/quality-management";
import ProblemsEncountered from "./pages/problems-encountered";
import ToolsUseful from "./pages/tools-useful";
import QualityPlanning from "./pages/quality-planning";
import ToolsUse from "./pages/tools-use";
import ToolsTechnique from "./pages/tools-technique";
import SystemProcedures from "./pages/system-procedures";
import OrganizationalCulture from "./pages/organizational-culture";
import OrganizationInhibiting from "./pages/organization-inhibiting";
import ManagerialEmployee from "./pages/managerial-employee";
import CostQuality from "./pages/cost-quality";

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
          <Route path="/selection/in-management" component={InManagement}>
            <Route
              exact
              path="/selection/in-management"
              component={InManagement}
            />
            <Route
              path="/selection/in-management/quality-system"
              component={QualitySystem}
            />
            <Route
              path="/selection/in-management/quality-management"
              component={QualityManagement}
            >
              <Route
                exact
                path="/selection/in-management/quality-management"
                component={QualityManagement}
              />
              <Route
                exact
                path="/selection/in-management/quality-management/tools-useful"
                component={ToolsUseful}
              />
              <Route
                exact
                path="/selection/in-management/quality-management/quality-planning"
                component={QualityPlanning}
              />
              <Route
                exact
                path="/selection/in-management/quality-management/tools-use"
                component={ToolsUse}
              />
              <Route
                exact
                path="/selection/in-management/quality-management/tools-technique"
                component={ToolsTechnique}
              />
            </Route>
          </Route>
          <Route
            path="/selection/in-management/problems-encountered"
            component={ProblemsEncountered}
          >
            <Route
              exact
              path="/selection/in-management/problems-encountered"
              component={ProblemsEncountered}
            />
            <Route
              path="/selection/in-management/problems-encountered/system-procedures"
              component={SystemProcedures}
            />
            <Route
              path="/selection/in-management/problems-encountered/organizational-culture"
              component={OrganizationalCulture}
            />
            <Route
              path="/selection/in-management/problems-encountered/organization-inhibiting"
              component={OrganizationInhibiting}
            />
            <Route
              path="/selection/in-management/problems-encountered/managerial-employee"
              component={ManagerialEmployee}
            />
            <Route
              path="/selection/in-management/problems-encountered/cost-quality"
              component={CostQuality}
            />
          </Route>
          <Route
            path="/selection/in-management/perceived-commitment"
            component={PerceivedCommitment}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
