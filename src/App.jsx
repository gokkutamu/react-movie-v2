import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Account/Login";
import { DiscoverDetail } from "./components/DetailTV/DiscoverDetail";
import { Seasons } from "./components/Session/Seasons";
import { Sessions_Episode } from "./components/Session-episode/sesions-episode";
import { Episode } from "./components/Episodes/Episode";
export function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/tv/:id" component={DiscoverDetail} exact />
        <Route path="/tv/:id/sesson" component={Seasons} exact />
        <Route path="/tv/:id/season/:season_number" component={Sessions_Episode} exact />
        <Route path="/tv/:id/season/:season_number/episode/:episode_number" component={Episode} exact />
      </Switch>
    </main>
  );
}

export default App;