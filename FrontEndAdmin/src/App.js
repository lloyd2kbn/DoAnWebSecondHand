import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import DefaultLayout from "./DefaultLayout";
import classNames from "classnames";
import Homepage from "./views/Homepage/Homepage";
import User from "./views/User/User";
import { Fragment } from "react";

import "antd/dist/antd.min.css";
import { publicRouterUser } from "./routers";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  HashRouter,
  Navigate,
} from "react-router-dom";
import Product from "./views/Product/Product";
import Order from "./views/Order/Order";
import Login from "./views/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRouterUser.map((router, index) => {
            const Layout = router.layout === null ? Fragment : DefaultLayout;
            const Page = router.component;
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
