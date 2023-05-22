import React from 'react';
import styled from 'styled-components';

const NavButton = styled.button`
	padding: 10px 16px;
	border: none;
	border-radius: 12px;
	background-color: rgba(93, 40, 242, 0.12);
	color: #5d28f2;
`;
const NavBar = () => {
	return (
		<div>
			<NavButton>환전하기</NavButton>
			<NavButton>거래내역</NavButton>
		</div>
	);
};
export default NavBar;
