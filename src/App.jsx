import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Account/Login";
import { Person } from "./components/Person/Person";
import { DiscoverDetail } from "./components/DetailTV/DiscoverDetail";
<<<<<<< HEAD
//TV
import { Discover } from "./components/TV/Discover";
import {MovieDetail} from "./components/DetailMovie/MovieDetail";

import Search from "./components/Search/Search";
import { Treding } from "./components/Treding/Treding";

import { Keyword } from "./components/DetailMovie/Keyword";
=======
import { Seasons } from "./components/Session/Seasons";
import { Sessions_Episode } from "./components/Session-episode/sesions-episode";
import { Episode } from "./components/Episodes/Episode";
>>>>>>> Nhom-E-DetailTV
export function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/discover/tv" component={Discover} />
        <Route path="/login" component={Login} exact />
<<<<<<< HEAD
        <Route path="/tredding" component={Treding} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/session/:id/seasons" component={Seasons} exact/>
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/keyword/:keyword_id/movie" component={Keyword} />
=======
        <Route path="/tv/:id" component={DiscoverDetail} exact />
        <Route path="/tv/:id/sesson" component={Seasons} exact />
        <Route path="/tv/:id/season/:season_number" component={Sessions_Episode} exact />
        <Route path="/tv/:id/season/:season_number/episode/:episode_number" component={Episode} exact />
>>>>>>> Nhom-E-DetailTV
      </Switch>
    </main>
  );
}

export default App;