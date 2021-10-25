import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login }  from "./components/Account/Login";
export function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </main>
  );
}

export default App;