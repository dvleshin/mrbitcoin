import React, { Component } from 'react';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage'
import ContactDetailsPage from './pages/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage'
import SignupPage from './pages/SignupPage'
import Header from './components/Header'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

const PrivateRoute = props => {
  return props.isAdmin ? <Route {...props} /> : <Redirect to="/login" />;
};

class App extends Component {

  render(){
    return <div class="app">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/statistics" component={StatisticPage} />
          <PrivateRoute
            isAdmin={true}
            path="/contact/edit/:id?"
            component={ContactEditPage}
          />
          <Route
            path="/contact/:id"
            render={props => {
              return <ContactDetailsPage {...props} onClose={this.goBack}/>;
            }}
            />
        </Switch>
      </Router>
      {/* 
      <StatisticPage></StatisticPage> */}
    </div>
  }
}

export default App;