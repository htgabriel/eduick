import React from "react"
import {Switch, Route} from 'react-router-dom'

import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";

export default function Routes(){
	return(
		<Switch>
			<Route exact path={"/"} component={Home} />
			<Route exact path={"/dashboard"} component={Dashboard} />
		</Switch>
	)
}