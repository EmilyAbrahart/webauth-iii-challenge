import React from 'react';
import './App.css';
import './App.css';
import LoginPage from './views/LoginPage';
import UsersPage from './views/UsersPage';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';

function App() {
  return (
    <div className="App">
      	<Route
				path="/login"
				render={() => {
					if (!localStorage.getItem('token')) {
						return <LoginPage />;
					}
					return <Redirect exact to="/" />;
				}}
			/>
			<PrivateRoute path="/" component={UsersPage} />
    </div>
  );
}

export default App;
