import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from './Welcome';
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import About from "./About";
import NicePlaces from "./NicePlaces";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import TopMenu from "./TopMenu";


function App() {
  return (
    <div>
      <TopMenu />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/niceplaces/:whatToRender" component={NicePlaces} />
        <Route path="/user" component={UserPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  )
}
export default App;