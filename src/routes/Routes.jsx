import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Screen/Page/Home";
import Protype from "../components/Screen/Page/Protype";
import MovieDetail from "../components/Screen/Page/MovieDetail";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/:category" exact component={Protype} />

            <Route path="/:category/:id" exact component={MovieDetail} />
            
            <Route path="/:category/search/:keyword" exact component={Protype} />
        </Switch>
    );
}

export default Routes;