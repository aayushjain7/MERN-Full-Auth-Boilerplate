import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';

function Body() {
	return (
		<section>
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</Switch>
		</section>
	);
}

export default Body;
