import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { EntryPage } from "./pages/EntryPage";
import { DeparturePage } from "./pages/DeparturePage";
import {TicketPage} from "./pages/TicketPage"
import {Header} from "../src/pages/Header"
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route exact path="/vehicleDeparture" component={DeparturePage} />
        <Route exact path="/tickets" component={TicketPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
