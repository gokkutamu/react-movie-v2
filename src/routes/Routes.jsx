import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../components/Screen/Home/Home";
import MovieDetail from "../components/Screen/Detail/MovieDetail";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/:category/:id" exact component={MovieDetail} />
        </Switch>
    );
}

export default Routes;