import React from 'react';
import { FlexDiv, Title } from './styled-components';
import Summary from './Summary';
import ExchangeInput from './ExchangeInput';

const Exchange = () => {
	return (
		<div>
			<Title>환전하기</Title>
			<FlexDiv>
				<Summary />
				<ExchangeInput />
			</FlexDiv>
		</div>
	);
};
export default Exchange;
