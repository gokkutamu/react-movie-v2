import React from "react";
import { Route } from "react-router-dom";
import Routes from "../routes/Routes";
import './App.scss';
import './index.css';

import Heading from "../components/Master/Heading";
import TheEnd from "../components/Master/TheEnd";

export function App() {
  return (
    <Route render={props => (
      <>
        <Heading {...props}/>
        <Routes/>
        <TheEnd/>
      </>
    )}/>
  );
}

export default App;