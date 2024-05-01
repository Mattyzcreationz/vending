
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Vending from './vending';
import Chips from './snacks/Chips'; 
import Candy from './snacks/Candy'; 
import Soda from './snacks/Soda'; 
import NotFound from './snacks/errornotfound'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Vending} />
        <Route path='/snacks/chips' component={Chips} /> 
        <Route path='/snacks/candy' component={Candy} /> 
        <Route path='/snacks/soda' component={Soda} /> 
        <Route component={NotFound} /> 
      </Switch>
    </Router>
  );
}

export default App;
