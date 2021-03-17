import React from "react";
import { Route } from "react-router-dom";
import { Details } from "./components/product/Details";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

export const routes = [
  <Route path="/" component={Home} exact />,
  <Route path="/products" component={Products} exact />,
  <Route path="/products/:id" component={Details} />,
]