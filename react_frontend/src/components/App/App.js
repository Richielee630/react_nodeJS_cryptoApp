import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Cointable from "../../pages/cointable/Cointable";
import Home from "../../pages/index/index";
// import ETH from "../../components/eth/eth";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Personal from "../../components/personal/personal";
import Intro from '../../components/introduction/index';
import '../config/config'
function App() {
  let my = document.cookie
  let username = ""
  if (my) {
    username = my.split("=")[1]
    if (username) {
      window.localStorage.setItem("username", username)
      // alert("cookie:" + username)
    } else {
      username = window.localStorage.getItem("username")
      // alert(username)
    }
  }

  return (
    <div className="App">
      <Header user={username} />
      <Switch>
        {/* <Home/> */}
        {/* <Cointable /> */}
        <Route path={'/'} exact component={Home} />
        <Route path={'/personal'} exact component={Personal} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/signup'} exact component={Signup} />
        <Route path={'/intro'} exact component={Intro} />
        {/*<Route path={'/page/:numPage'} exact component={Home}/>*/}
        {/*<Route path={'/coins/:id'} component={Coin}/>*/}
        {/*<Route path={'*'} component={PageNotFound} />*/}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
