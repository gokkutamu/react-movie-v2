import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Account/Login";
import { DiscoverDetail } from "./components/DetailTV/DiscoverDetail";
export function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/tv/:id" component={DiscoverDetail} exact />
      </Switch>
    </main>
  );
}

export default App;