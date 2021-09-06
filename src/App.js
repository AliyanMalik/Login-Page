import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Screens/Login/Login";
import SignUp from "./components/Screens/Sign Up/SignUp";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </Router>
  );
};

export default App;
