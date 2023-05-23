import React from 'react';
import styled from 'styled-components';
import Icons from '../util/Icons';
import { MiddleText } from './styled-components';
const SummaryWrapper = styled.div`
	background-color: #fafbfc;
	padding: 24px;
	width: 260px;
	border-radius: 12px;
	margin-right: 18px;
`;
const SummaryTitle = styled.p`
	font-size: 18px;
	color: #4c5b7a;
	font-weight: 600;
	margin-bottom: 16px;
	padding-bottom: 16px;
	border-bottom: 1px solid #c8ccd7;
`;
const SummaryItem = styled.div`
	margin-bottom: 28px;
`;
const Summary = () => {
	return (
		<SummaryWrapper>
			<SummaryTitle>요약</SummaryTitle>
			<SummaryItem>
				<Icons name="SOL" background={true} />
				<MiddleText>1,211,023,512.34 SOL</MiddleText>
			</SummaryItem>
			<SummaryItem>
				<Icons name="ETH" background={true} />
				<MiddleText>512.01 ETH</MiddleText>
			</SummaryItem>
			<SummaryItem>
				<Icons name="BNB" background={true} />
				<MiddleText>0.35 BNB</MiddleText>
			</SummaryItem>
		</SummaryWrapper>
	);
};
export default Summary;
