// NPM packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import "./assets/styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Edit from "./pages/Edit";
import MenuPage from "./pages/MenuPage";
import Category from "./pages/CategoryPage";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import { getCollection } from "./scripts/fireStore";
import { useMenu } from "./state/MenuProvider";

// This should be a .jsx file
export default function App() {
  // Global state
  const { dispatch } = useMenu();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const PATH = "bbqMenu";

  // Methods
  const fetchData = useCallback(
    async (path) => {
      try {
        const menu = await getCollection(path);

        dispatch({ type: "Set_Menu", payload: menu });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [dispatch]
  );

  useEffect(() => fetchData(PATH), [fetchData]);

  // Component
  // To make this component shorter, the browser should be a separate component
  const Browser = (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={AdminHome} exact path="/admin" />
        <Route component={Edit} path="/edit/:id" />
        <Route component={MenuPage} exact path="/menu/:id" />
        <Route component={Category} exact path="/category" />
        <Route component={Product} exact path="/product/:id" />
        <Route component={Contact} exact path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && Browser}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
