import React from 'react';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './screens/Login';
import PurchaseMenu from './screens/PurchaseMenu';
import AddPurchase from './screens/AddPurchase';
import Purchase from './screens/Purchase';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login}></Route>
      <Route path="/purchaseMenu" component={PurchaseMenu}></Route>
      <Route path="/addPurchase" component={AddPurchase}></Route>
      <Route path="/purchase" component={Purchase}></Route>
    </BrowserRouter>
  );
}

export default App;
