import "./App.css";
import Login from "./components/login/Login";
import { Router, Route, Switch } from "react-router-dom";
import history from "./components/History";
import TelInput from "./components/TelInput";
import Accessed from "./components/Accessed";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/accessed" component={Accessed} />
          <Route exact path="/access-token" component={TelInput} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
