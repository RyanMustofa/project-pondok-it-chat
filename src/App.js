import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './component/login/login';
import Dashboard from "./component/dashboard/dashboard";

const App = () => {
    return(
        <div>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </div>
    )
}

export default App;
