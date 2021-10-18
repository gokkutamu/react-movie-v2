import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Account/Login";
import { Person } from "./components/Person/Person";
import { DiscoverDetail } from "./components/DetailTV/DiscoverDetail";
//TV
import { Discover } from "./components/TV/Discover";
import {MovieDetail} from "./components/DetailMovie/MovieDetail";

import Search from "./components/Search/Search";
export function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/discover/tv" component={Discover} />
        <Route path="/login" component={Login} exact />
        <Route path="/person/:id" component={Person} />
        <Route path="/tv/:id" component={DiscoverDetail} exact />
        <Route path="/movie/:id" component={MovieDetail} />

        <Route path="/search" component={Search} exact />
      </Switch>
    </main>
  );
}

export default App;