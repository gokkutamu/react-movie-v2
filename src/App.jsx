import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Account/Login";
import { Person } from "./components/Person/Person";
import { DiscoverDetail } from "./components/DetailTV/DiscoverDetail";
//TV
import { Discover } from "./components/TV/Discover";
import { Seasons } from "./components/TV/Session/Seasons";
import {MovieDetail} from "./components/DetailMovie/MovieDetail";

// import Search from "./components/Search/Search";
import { Treding } from "./components/Treding/Treding";
import { Dashboard } from "./components/Dashboard/Dashboard";

export function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/discover/tv" component={Discover} />
        <Route path="/login" component={Login} exact />
        <Route path="/tredding" component={Treding} exact />
        {/* <Route path="/search" component={Search} exact /> */}
        <Route path="/session/:id/seasons" component={Seasons} exact/>
        <Route path="/dashboard" component={Dashboard} exact/>
      </Switch>
    </main>
  );
}

export default App;