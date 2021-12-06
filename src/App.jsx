import React, { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Search />

      <div className="main-content-wrapper d-flex clearfix">
        

        <Router>
          <Sidebar />
          <Switch>
            <Route path='/login' component={Login} ></Route>
            <Route path='/register' component={Register} ></Route>
          </Switch>
        </Router>

      </div>
    </>
  );
}

export default App;
