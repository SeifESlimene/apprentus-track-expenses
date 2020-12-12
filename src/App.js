import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RightMenu from "./components/RightMenu";
import LeftMenu from "./components/LeftMenu";

function App() {
  return (
    <>
      <Switch>
        <Route path="/expense">
          <div style={{ display: "flex", height: "100%" }}>
            <LeftMenu />
            <RightMenu />
          </div>
        </Route>
        <Route path="/list">
          <div style={{ display: "flex" }}>
            <LeftMenu />
            <RightMenu />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
