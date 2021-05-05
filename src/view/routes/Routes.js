import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Main from "../pages/Main/Main";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
