import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

export const routes = [
  <Route path="/" component={Home} exact />,
  <Route path="/products" component={Products} exact />,
]