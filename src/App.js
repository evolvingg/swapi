import React from 'react';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from "react-router-dom";
  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';
  import * as actionCreators from './actions/index';
  import PlanetDetails from './components/PlanetDetails/PlanetDetails';
  

class App extends React.Component {
constructor() {
  super();
  this.state = {
    planets:[],
    selectedPlanet:null,
    tab:''
  }
}

componentDidMount(){
  let planets;
  axios.get(`https://swapi.co/api/planets`)
  .then(res => {
      planets = res.data.results;
      console.log(res.data.results);
      this.setState({
          planets : planets
      });
  });
}

log = (val) => {
  this.props.logged(val);
  alert('u loggedIn')
}

called = (index) => {
  const planet = this.state.planets.slice(0)[index];
  this.props.selected(planet);
}

logout = (val) => {
  this.props.logout(val);
}

handleChange = (val) => {
  
}

  render() {
    const sp = this.props.selectedPlanet;
    const log = this.props.loggedIn;
    const pl = this.state.planets;
    const srp = pl && log ? `/search` : "";
    const plname = log ? (sp ? `/view/${sp.name}` : srp): "";
    console.log('props1:',this.props,this.state,sp ,plname);
    return (
        <div className="App">
          <Router>
          <Link to="/">
            <div className="container">
              <h1 className="title">SWAPI</h1>
            </div>
          </Link>
            <ul className="container grid navbar">
              <Link to="/" className="col-4" >
                <li className="item" >
                  Login
                </li>
              </Link>
              <Link to={srp} className="col-4">
                <li className="item">
                  PlanetList
                </li>
							</Link>
              <Link to={plname} className="col-4">
                <li className="item">
                  PlanetDetails
                </li>
							</Link>            
            </ul>
            <Route exact path="/" render={(props) => <Login {...props} logs={this.log} loggedIn={this.props.loggedIn} logout={this.logout}/>}/>
            <Route exact path={srp} render={(props) => 
            this.props.loggedIn && (<Search {...props} planets={this.state.planets} called={this.called} handle={this.handleChange}/>)} /> 
            <Route exact path={plname} render={(props) => 
              this.props.loggedIn && <PlanetDetails {...props} selectedPlanet={this.props.selectedPlanet}/> } /> 
          </Router>
        </div>
    );
  }
}


function mapStateToProps(state) {
  return  {
        planets: state.planets,
        selectedPlanet: state.planet.selectedPlanet,
        loggedIn: state.login.loggedIn
    };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispachToProps)(App);
export default Main;