import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "../components/create.component";
import Edit from "../components/edit.component";
import Index from "../components/index.component";

class Admin extends Component {
  render() {
    return (

      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                         
                          <li className="nav-item">
                              <Link to={'/create'} className="nav-link">
                                  <button  className="snip">Thêm sản phẩm</button>
                                  </Link>
                          </li>
                          <li className="nav-item">
                              <Link to={'/index'} className="nav-link"> <button  className="snip">Danh sách</button></Link>
                          </li>
                      </ul>
                  </div>
              </nav> <br/>
              <Switch>
                  <Route exact path='/create' component={ Create } />
                  <Route path='/edit/:id' component={ Edit } />
                  <Route path='/index' component={ Index } />
              </Switch>
          </div>
      </Router>
    );
  }
}

export default Admin;
