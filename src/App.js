import React from "react";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Quemsomos from "./pages/quemsomos/Quemsomos";
import Contactanos from "./pages/contactanos/Contactanos";
import HomeFr from "./pagesFr/home/HomeFr";
import Quisommesnous from "./pagesFr/quemsomos/Quisommesnous";
import Nouscontacter from "./pagesFr/contactanos/Nouscontacter";
import ScrollToTop from "./utilities/ScrollToTop";
import Contactus from "./pagesEng/contactus/Contactus";
import Aboutus from "./pagesEng/aboutus/Aboutus";
import HomeEng from "./pagesEng/home/HomeEng";
import Contribuir from "./pages/contribuir/Contribuir";
import Atividades from "./pages/atividades/Atividades";
import Login from "./pages/login/Login";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path="/quemsomos">
          <Quemsomos/>
        </Route>
        <Route path="/contactanos">
          <Contactanos/>
        </Route>
        <Route path="/contribuir">
          <Contribuir/>
        </Route>
        <Route path="/atividades">
          <Atividades/>
        </Route>
        <Route path="/fr">
          <HomeFr/>
        </Route>
        <Route path="/quisommesnous">
          <Quisommesnous/>
        </Route>
        <Route path="/nouscontacter">
          <Nouscontacter/>
        </Route>
        <Route path="/aboutus">
          <Aboutus/>
        </Route>
        <Route path="/contactus">
          <Contactus/>
        </Route>
        <Route path="/eng">
          <HomeEng/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;