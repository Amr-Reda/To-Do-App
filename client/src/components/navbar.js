import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Profile from './profile';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavBar = () => {
	const {
		isAuthenticated,
		loginWithRedirect,
		logout,
		getIdTokenClaims,
	} = useAuth0();

	return (
		<div>
			<Navbar style={{ marginBottom: '2rem' }} color='info' dark>
				<NavbarBrand href='/'>TO DO APP</NavbarBrand>
				<div>
					{!isAuthenticated && (
						<button
							className='btn btn-danger'
							onClick={() => loginWithRedirect({})}
						>
							Log in
						</button>
					)}
					{isAuthenticated && (
						<button
							className='btn btn-danger'
							onClick={() => logout()}
						>
							Log out
						</button>
					)}
				</div>
			</Navbar>
			{isAuthenticated && (
				<Profile getIdTokenClaims={getIdTokenClaims}></Profile>
			)}
		</div>
	);
};

export default NavBar;
