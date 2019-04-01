import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// HashRouter, BrowserRouter
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";
import Detail from "../Routes/Detail";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                {/* <Route path="/tv/popular" renter={() => <h1>Popular</h1>} /> */}
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
                {/* 위에서 Route되지 않으면 어느페이지에서든지 받아서 '/'으로 보냄 */}
            </Switch>
        </>
    </Router>
);