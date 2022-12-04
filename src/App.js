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
import {CellsPage} from "./pages/CellsPage"
import {UsersPage} from "./pages/UsersPage"
import {InvoicesPage} from "./pages/InvoicesPage"
import {PayInvoicePage} from "./pages/PayInvoicePage"
import {NewCellPage} from "./pages/NewCellPage"
import {NewUserPage} from "./pages/NewUserPage"

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route exact path="/vehicleDeparture" component={DeparturePage} />
        <Route exact path="/tickets" component={TicketPage} />
        <Route exact path="/cells" component={CellsPage} />
        <Route exact path="/newCell" component={NewCellPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/newUser" component={NewUserPage} />
        <Route exact path="/invoices" component={InvoicesPage} />
        <Route exact path="/payInvoice" component={PayInvoicePage} />
        
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
