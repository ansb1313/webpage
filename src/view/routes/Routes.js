import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";

const Routes = () => {
    return (
        <Switch>
            <Route path={"/"} component={Main} />
        </Switch>
    );
};

export default Routes;
