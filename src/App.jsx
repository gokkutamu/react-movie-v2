import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Account/Login";
//TV
import { Discover } from "./components/TV/Discover";
import {Seasons} from "./components/TV/Session/Seasons";
export function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/discover/tv" component={Discover} />
        <Route path="/login" component={Login} exact />
        <Route path="/session/:id/seasons" component={Seasons} exact/>
      </Switch>
    </main>
  );
}

export default App;