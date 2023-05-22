import React from 'react';
import styled from 'styled-components';
import { IconName } from '../components/styled-components';
interface IconsProps {
	name: 'SOLANA' | 'ETHEREUM' | 'BNB';
	background: boolean;
}
const iconInfo = {
	SOLANA: {
		name: 'Solana',
		imgpath: 'https://cdn.cdnlogo.com/logos/s/85/solana.svg',
	},
	ETHEREUM: {
		name: 'Ethereum',
		imgpath: 'https://cdn.cdnlogo.com/logos/e/39/ethereum.svg',
	},
	BNB: {
		name: 'BnB',
		imgpath: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=025',
	},
};
const IconWarpper = styled.div`
	display: flex;
	align-items: center;
`;
const IconsBackGround = styled.div`
	width: 35px;
	height: 35px;
	background-color: #2a32490d;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
`;
const IconsImage = styled.img`
	width: 25px;
	height: 25px;
`;
const Icons = (props: IconsProps) => {
	return (
		<>
			{props.background ? (
				<IconWarpper>
					<IconsBackGround>
						<IconsImage src={iconInfo[props.name].imgpath} />
					</IconsBackGround>
					<IconName>{iconInfo[props.name].name}</IconName>
				</IconWarpper>
			) : (
				<IconWarpper>
					<IconsImage src={iconInfo[props.name].imgpath} />
					<IconName>{iconInfo[props.name].name}</IconName>
				</IconWarpper>
			)}
		</>
	);
};
export default Icons;
