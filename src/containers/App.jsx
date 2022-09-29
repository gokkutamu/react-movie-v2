import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Screen/Home/Home";
import { Movie } from "../components/Screen/Detail/Movie";

export function App() {
  return (
    <main>
      <Switch>
        {/* Home screen */}
        <Route path="/" component={Home} exact />

        {/* Live TV screen */}
        {/* <Route path="/tv/:id" component={DiscoverDetail} exact />
        <Route path="/tv/:id/season" component={Seasons} exact />
        <Route path="/tv/:id/season/:season_number" component={Sessions_Episode} exact />
        <Route path="/tv/:id/season/:season_number/episode/:episode_number" component={Episode} exact /> */}

        {/* Trending movie screens */}
        {/* <Route path="/trending" component={Trending} exact /> */}

        {/* Movie screen */}
        {/* <Route path="/discover/tv" component={Discover} /> */}
        <Route path="/movie/:id" component={Movie} />

        {/* Actor profile screen */}
        {/* <Route path="/person/:id" component={Person} />
        <Route path="/persons/:id/images/profiles" component={Profiles} /> */}

        {/* Keyword (search)*/}
        {/* <Route path="/search" component={Search} exact />
        <Route path="/session/:id/seasons" component={Seasons} exact />
        <Route path="/keyword/:keyword_id/movie" component={Keyword} /> */}
      </Switch>
    </main>
  );
}

export default App;