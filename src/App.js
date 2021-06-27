import React , {Component} from "react";
import './App.css'
import {BrowserRouter, Route, Switch}from "react-router-dom";
import Home from "./contrainers/Home";
import About from "./contrainers/About"; 
import Order from "./contrainers/order/Order"
import Product from "./contrainers/product/Product"
import NotFound from "./contrainers/error/NotFound"

class App extends Component {

  renderRouter(){
    return(
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/orders" component={Order}/>
      <Route exact path="/products" component={Product}/>
      
      <Route component={NotFound}/>
      
      
      </Switch>
    )
  }

  render(){
    return(
      <BrowserRouter>
      {this.renderRouter()}
      </BrowserRouter>
    )
  }
}

export default App;
