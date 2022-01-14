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
import Factors from "./pages/factors";
import Preservation from "./pages/preservation";
import Pollution from "./pages/pollution";
import Consumption from "./pages/consumption";
import Traffic from "./pages/traffic";
import Sustainable from "./pages/sustainable";
import Barriers from "./pages/barriers";
import Payment from "./pages/payment";
import Letter from "./pages/letter";
import Open from "./pages/open";
import Consignment from "./pages/consignment";
import Cash from "./pages/cash";
import Parameters from "./pages/parameters";
import Quality from "./pages/quality";
import Price from "./pages/price";
import Complaint from "./pages/complaint";
import Guarantees from "./pages/guarantees";
import Checks from "./pages/checks";
import Testing from "./pages/testing";
import Insisting from "./pages/insisting";
import Frequent from "./pages/frequent";
import Revising from "./pages/revising";
import Proper from "./pages/proper";
import Basis from "./pages/basis";
import Speed from "./pages/speed";
import Cost from "./pages/cost";
import Types from "./pages/types";
import Reduce from "./pages/reduce";
import Avoid from "./pages/avoid";
import Leverage from "./pages/leverage";
import Oversee from "./pages/oversee";
import Review from "./pages/review";
import BQuality from "./pages/bquality";
import Include from "./pages/include";
import Risk from "./pages/risk";
import RTypes from "./pages/rtypes";
import RPrice from "./pages/rprice";
import RSupply from "./pages/rsupply";
import RComplex from "./pages/rcomplex";
import RFraud from "./pages/rfraud";
import RPoor from "./pages/rpoor";
import ROverspending from "./pages/roverspending";
import RInaccurate from "./pages/rinaccurate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/selection" component={Selection}>
          <Route exact path="/selection" component={Selection} />
          {/* Procurement */}
          <Route path="/selection/procurement" component={Procurement}>
            <Route
              exact
              path="/selection/procurement"
              component={Procurement}
            />
            <Route path="/selection/procurement/factors" component={Factors}>
              <Route
                exact
                path="/selection/procurement/factors"
                component={Factors}
              />
              <Route
                path="/selection/procurement/factors/preservation"
                component={Preservation}
              />
              <Route
                path="/selection/procurement/factors/pollution"
                component={Pollution}
              />
              <Route
                path="/selection/procurement/factors/consumption"
                component={Consumption}
              />
              <Route
                path="/selection/procurement/factors/traffic"
                component={Traffic}
              />
              <Route
                path="/selection/procurement/factors/sustainable"
                component={Sustainable}
              />
            </Route>
            <Route
              path="/selection/procurement/barriers"
              component={Barriers}
            />
            <Route path="/selection/procurement/payment" component={Payment}>
              <Route
                exact
                path="/selection/procurement/payment"
                component={Payment}
              />
              <Route
                path="/selection/procurement/payment/letter"
                component={Letter}
              />
              <Route
                path="/selection/procurement/payment/open"
                component={Open}
              />
              <Route
                path="/selection/procurement/payment/consignment"
                component={Consignment}
              />
              <Route
                path="/selection/procurement/payment/cash"
                component={Cash}
              />
            </Route>
            <Route
              path="/selection/procurement/parameters"
              component={Parameters}
            >
              <Route
                exact
                path="/selection/procurement/parameters"
                component={Parameters}
              />
              <Route
                path="/selection/procurement/parameters/quality"
                component={Quality}
              />
              <Route
                path="/selection/procurement/parameters/price"
                component={Price}
              />
              <Route
                path="/selection/procurement/parameters/complaint"
                component={Complaint}
              />
              <Route
                path="/selection/procurement/parameters/guarantees"
                component={Guarantees}
              />
            </Route>
            <Route path="/selection/procurement/basis" component={Basis}>
              <Route
                exact
                path="/selection/procurement/basis"
                component={Basis}
              />
              <Route
                path="/selection/procurement/basis/speed"
                component={Speed}
              />
              <Route path="/selection/procurement/basis/cost" component={Cost}>
                <Route
                  exact
                  path="/selection/procurement/basis/cost"
                  component={Cost}
                />
                <Route
                  path="/selection/procurement/basis/cost/types"
                  component={Types}
                />
                <Route
                  path="/selection/procurement/basis/cost/reduce"
                  component={Reduce}
                >
                  <Route
                    exact
                    path="/selection/procurement/basis/cost/reduce"
                    component={Reduce}
                  />
                  <Route
                    path="/selection/procurement/basis/cost/reduce/avoid"
                    component={Avoid}
                  />
                  <Route
                    path="/selection/procurement/basis/cost/reduce/leverage"
                    component={Leverage}
                  />
                  <Route
                    path="/selection/procurement/basis/cost/reduce/oversee"
                    component={Oversee}
                  />
                  <Route
                    path="/selection/procurement/basis/cost/reduce/review"
                    component={Review}
                  />
                </Route>
              </Route>
              <Route
                path="/selection/procurement/basis/bquality"
                component={BQuality}
              >
                <Route
                  exact
                  path="/selection/procurement/basis/bquality"
                  component={BQuality}
                />
                <Route
                  path="/selection/procurement/basis/bquality/include"
                  component={Include}
                />
              </Route>
              <Route path="/selection/procurement/basis/risk" component={Risk}>
                <Route
                  exact
                  path="/selection/procurement/basis/risk"
                  component={Risk}
                />
                <Route
                  path="/selection/procurement/basis/risk/rtypes"
                  component={RTypes}
                >
                  <Route
                    exact
                    path="/selection/procurement/basis/risk/rtypes"
                    component={RTypes}
                  />
                  <Route
                    path="/selection/procurement/basis/risk/rtypes/rprice"
                    component={RPrice}
                  />
                  <Route
                    path="/selection/procurement/basis/risk/rtypes/rsupply"
                    component={RSupply}
                  />
                  <Route
                    path="/selection/procurement/basis/risk/rtypes/rcomplex"
                    component={RComplex}
                  />
                  <Route
                    path="/selection/procurement/basis/risk/rtypes/rfraud"
                    component={RFraud}
                  />
                  <Route
                    path="/selection/procurement/basis/risk/rtypes/rpoor"
                    component={RPoor}
                  />
                  <Route
                    path="/selection/procurement/basis/risk/rtypes/roverspending"
                    component={ROverspending}
                  />
                  <Route
                    path="/selection/procurement/basis/risk/rtypes/rinaccurate"
                    component={RInaccurate}
                  />
                </Route>
              </Route>
            </Route>
            <Route path="/selection/procurement/checks" component={Checks}>
              <Route
                exact
                path="/selection/procurement/checks"
                component={Checks}
              />
              <Route
                path="/selection/procurement/checks/testing"
                component={Testing}
              />
              <Route
                path="/selection/procurement/checks/insisting"
                component={Insisting}
              />
              <Route
                path="/selection/procurement/checks/frequent"
                component={Frequent}
              />
              <Route
                path="/selection/procurement/checks/revising"
                component={Revising}
              />
              <Route
                path="/selection/procurement/checks/proper"
                component={Proper}
              />
            </Route>
          </Route>
          {/* After construction */}
          <Route
            path="/selection/after-construction"
            component={AfterConstruction}
          >
            <Route
              exact
              path="/selection/after-construction"
              component={AfterConstruction}
            />
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
