import React from 'react';
import NavBar from './NavBar';
import { LogoTitle, Topbar } from './styled-components';

const Header = () => {
	return (
		<Topbar>
			<LogoTitle>alocados</LogoTitle>
			<NavBar />
		</Topbar>
	);
};
export default Header;
