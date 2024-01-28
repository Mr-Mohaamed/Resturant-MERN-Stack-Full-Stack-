import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import React, { useContext, useState } from 'react';

export const Context = React.createContext();

const Layout = () => {
	const [loginUser, setLoginUser] = useState('');
	return (
		<Context.Provider value={[loginUser, setLoginUser]}>
			<div>
				<Nav />
				<Outlet />
				{/* <footer>@CopyRight</footer> */}
			</div>
		</Context.Provider>
	);
};

export default Layout;
