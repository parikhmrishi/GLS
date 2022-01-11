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
import QualityParameter from "./pages/quality-parameter";
import StandardProcedures from "./pages/standard-procedures";
import RccState from "./pages/rcc-state";
import QualityStandards from "./pages/quality-standards";
import MasonryBooklet from "./pages/masonry-booklet";
import Pre from "./pages/pre";
import During from "./pages/during";
import Post from "./pages/post";
import ExcavationBooklet from "./pages/excavation-booklet";
import General from "./pages/general";
import Utilities from "./pages/utilities";
import Access from "./pages/access";
import Wet from "./pages/wet";
import Hazardous from "./pages/hazardous";
import Support from "./pages/support";
import Installation from "./pages/installation";
import InspectI from "./pages/inspect-i";
import InspectM from "./pages/inspect-m";
import RCCBooklet from "./pages/rcc-booklet";
import Formwork from "./pages/formwork";
import Reinforcement from "./pages/reinforcement";
import PreC from "./pages/pre-c";
import DuringC from "./pages/during-c";
import PostC from "./pages/post-c";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/selection" component={Selection}>
          <Route exact path="/selection" component={Selection} />
          <Route path="/selection/procurement" component={Procurement} />
          {/* After construction */}
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
          {/* During construction */}
          <Route
            path="/selection/during-construction"
            component={DuringConstruction}
          >
            <Route
              exact
              path="/selection/during-construction"
              component={DuringConstruction}
            />
            {/* What are the quality parameters your company follows for masonry
            work? */}
            <Route
              path="/selection/during-construction/quality-parameter"
              component={QualityParameter}
            >
              <Route
                exact
                path="/selection/during-construction/quality-parameter"
                component={QualityParameter}
              />
              {/* MasonryBooklet */}
              <Route
                path="/selection/during-construction/quality-parameter/masonry-booklet"
                component={MasonryBooklet}
              >
                <Route
                  exact
                  path="/selection/during-construction/quality-parameter/masonry-booklet"
                  component={MasonryBooklet}
                />
                <Route
                  path="/selection/during-construction/quality-parameter/masonry-booklet/pre"
                  component={Pre}
                />
                <Route
                  path="/selection/during-construction/quality-parameter/masonry-booklet/during"
                  component={During}
                />
                <Route
                  path="/selection/during-construction/quality-parameter/masonry-booklet/post"
                  component={Post}
                />
              </Route>
            </Route>
            {/* What are the standard procedures your company follows in Earth work
            excavation stage? */}
            <Route
              path="/selection/during-construction/standard-procedures"
              component={StandardProcedures}
            >
              <Route
                exact
                path="/selection/during-construction/standard-procedures"
                component={StandardProcedures}
              />
              {/* excavation-booklet */}
              <Route
                path="/selection/during-construction/standard-procedures/excavation-booklet"
                component={ExcavationBooklet}
              >
                <Route
                  exact
                  path="/selection/during-construction/standard-procedures/excavation-booklet"
                  component={ExcavationBooklet}
                />
                <Route
                  path="/selection/during-construction/standard-procedures/excavation-booklet/general"
                  component={General}
                />
                <Route
                  path="/selection/during-construction/standard-procedures/excavation-booklet/utilities"
                  component={Utilities}
                />
                <Route
                  path="/selection/during-construction/standard-procedures/excavation-booklet/access"
                  component={Access}
                />
                <Route
                  path="/selection/during-construction/standard-procedures/excavation-booklet/wet"
                  component={Wet}
                />
                <Route
                  path="/selection/during-construction/standard-procedures/excavation-booklet/hazardous"
                  component={Hazardous}
                />
                <Route
                  path="/selection/during-construction/standard-procedures/excavation-booklet/support"
                  component={Support}
                />
              </Route>
            </Route>
            {/* What are the parameters your company follows for RCC stage? */}
            <Route
              path="/selection/during-construction/rcc-state"
              component={RccState}
            >
              <Route
                exact
                path="/selection/during-construction/rcc-state"
                component={RccState}
              />
              {/* RCC Booklet */}
              <Route
                path="/selection/during-construction/rcc-state/rcc-booklet"
                component={RCCBooklet}
              >
                <Route
                  exact
                  path="/selection/during-construction/rcc-state/rcc-booklet"
                  component={RCCBooklet}
                />
                <Route
                  path="/selection/during-construction/rcc-state/rcc-booklet/formwork"
                  component={Formwork}
                />
                <Route
                  path="/selection/during-construction/rcc-state/rcc-booklet/reinforcement"
                  component={Reinforcement}
                />
                <Route
                  path="/selection/during-construction/rcc-state/rcc-booklet/pre-c"
                  component={PreC}
                />
                <Route
                  path="/selection/during-construction/rcc-state/rcc-booklet/during-c"
                  component={DuringC}
                />
                <Route
                  path="/selection/during-construction/rcc-state/rcc-booklet/post-c"
                  component={PostC}
                />
              </Route>
            </Route>
            {/* What quality standards does your organization adhere to when
            installing sanitary and water supply services? */}
            <Route
              path="/selection/during-construction/quality-standards"
              component={QualityStandards}
            >
              <Route
                exact
                path="/selection/during-construction/quality-standards"
                component={QualityStandards}
              />
              {/* Installation of sanitary and water supply services. */}
              <Route
                path="/selection/during-construction/quality-standards/installation"
                component={Installation}
              >
                <Route
                  exact
                  path="/selection/during-construction/quality-standards/installation"
                  component={Installation}
                />
                <Route
                  path="/selection/during-construction/quality-standards/installation/inspect-i"
                  component={InspectI}
                />
                <Route
                  path="/selection/during-construction/quality-standards/installation/inspect-m"
                  component={InspectM}
                />
              </Route>
            </Route>
          </Route>
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
            {/* Quality management tool to be adopted */}
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

          {/* Problems encountered in relation with implementation of Quality Management */}
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
