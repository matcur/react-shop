import React from "react";
import { Route } from "react-router-dom";
import { Details as ProductDetails } from "./components/product/Details";
import { Details as CategoryDetails } from "./components/category/Details";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { CategoryPosts } from "./pages/CategoryPosts";
import { LogIn } from "./pages/auth/LogIn";
import { Registration } from "./pages/auth/Registration";
import { Cart } from "./pages/Cart";
import { SignOut } from "./pages/auth/SignOut";
import { SearchResult } from "./pages/SearchResult";

export const routes = [
  <Route path="/" component={Home} exact />,
  <Route path="/products" component={Products} exact />,
  <Route path="/products/:id" component={ProductDetails} exact />,
  <Route path="/categories" component={Categories} exact />,
  <Route path="/categories/:id" component={CategoryDetails} exact />,
  <Route path="/categories/:id/posts" component={CategoryPosts} exact />,
  <Route path="/cart" component={Cart} exact/>,
  <Route path="/sign-out" component={SignOut} exact/>,
  <Route path="/log-in" component={LogIn} exact/>,
  <Route path="/registration" component={Registration} exact/>,
  <Route path="/search/result" component={SearchResult} exact/>,
]