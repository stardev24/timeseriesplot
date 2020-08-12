import React from 'react';
import  Home  from '../views/Home';
import  Stats  from '../views/Stats';
import SideNavbar from '../components/Sidenav'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export const Routes = () => {
  
  return (
    <Router >
          <SideNavbar/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
          <Switch>
              <Route exact path="/" >
                <Home/>
              </Route>
              <Route path="/home"><Home/></Route> 
              <Route path="/dashboard"><Stats/></Route> 
          
          </Switch>
      </Grid>
    </Router>
  );
};
