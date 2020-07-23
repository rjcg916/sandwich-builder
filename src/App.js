import React from 'react';
import Layout from './hoc/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import Checkout from './containers/Checkout/Checkout';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Layout>      
      <Switch>
       <Route path="/checkout" component={Checkout} /> 
       <Route path="/" component={SandwichBuilder} />
       <Redirect to="/" />
      </Switch>
    </Layout>    
    </BrowserRouter>
  );
}

export default App;
