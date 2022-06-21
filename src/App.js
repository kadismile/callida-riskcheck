import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home";

function App() {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return (
    <>
      <div className="demo-1" id="bdy">
        <Header />
        {routes}
        <Footer />
      </div>
    </>
  );
}

export default App;
