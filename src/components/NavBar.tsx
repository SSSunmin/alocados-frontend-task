import React from 'react';
import { useRecoilState } from 'recoil';
import { tabState } from '../recoilState';
import styled from 'styled-components';

const NavButton = styled.button<{ mainButton: boolean }>`
	padding: 10px 16px;
	border: none;
	border-radius: 12px;
	background-color: ${(props) =>
		props.mainButton ? ' rgba(93, 40, 242, 0.12)' : 'white'};
	color: ${(props) => (props.mainButton ? ' #5D28F2' : '#404E71')};
`;
const NavBar = () => {
	const [tab, setTab] = useRecoilState(tabState);
	return (
		<div>
			<NavButton mainButton={tab === 0} onClick={() => setTab(0)}>
				환전하기
			</NavButton>
			<NavButton mainButton={tab === 1} onClick={() => setTab(1)}>
				거래내역
			</NavButton>
		</div>
	);
};
export default NavBar;
