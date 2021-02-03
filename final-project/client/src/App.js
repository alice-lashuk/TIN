import React, {Suspense} from 'react';
import './App.css';
import Add from './components/Add';
import MainMenu from './components/Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Update from './components/Update';
import Display from './components/Display';
import Delete from './components/Delete';
import Login from './components/Login';
import Register from './components/Register';
import Navbarcustom from './components/Navbar';
import {LanguageSelector} from'./components/LanguageSelector';
import i18n from 'i18next';
import {ProtectedRouter, ProtectedRouterAdmin} from './components/ProtectedRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse:"", lang:""};
    this.Logout = this.Logout.bind(this);
  }

  Logout() {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("is_token");
  }

  render() {
    return (
      <Suspense fallback="">
      <div className="App">
        <header className="App-header">
        </header>
        <Router>
        <Navbarcustom logout={this.Logout}/>
          <Switch>  
          {/* <ProtectedRouter path='/add' render={(props)=><Add {...props} lang={this.state.lang}/>}/> */}
          <ProtectedRouter path='/add' component={Add}/>
          <ProtectedRouter path = '/update' component={Update} />
          <Route path = '/display' component={Display} />
          <ProtectedRouterAdmin path = '/delete' component={Delete} />
          <Route path = '/register' component={Register} />
          <Route path = '/login' component={Login} />
          <Route path = '/' component={MainMenu} />
          </Switch>
        </Router> 
      </div>
      </Suspense> 
    );  
  }
}

export default App;

