import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ActivationEmail from './auth/ActivationEmail';
import Login from './auth/Login';
import Register from './auth/Register';
import { useSelector } from 'react-redux';
import NotFound from '../utils/notfound/NotFound';

function Body() {
	const auth = useSelector((state) => state.auth);
	const { isLogged, isAdmin } = auth;
	return (
		<section>
			<Switch>
				<Route path='/login' component={isLogged ? NotFound : Login} exact />
				<Route path='/register' component={isLogged ? NotFound : Register} exact />
				<Route exact path='/user/activate/:activation_token' component={ActivationEmail} />
			</Switch>
		</section>
	);
}

export default Body;
