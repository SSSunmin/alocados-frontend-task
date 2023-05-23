import React from 'react';
import Icons from '../util/Icons';
import { FlexColumnDiv, FlexDiv, LongButton } from './styled-components';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { TbSquareChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import HistoryTextBox from './HistoryTextBox';
import { dummyhistory } from './TransactionHistory';

const NormalDiv = styled.div`
	height: 56px;
	padding: 10px 16px;
	box-sizing: border-box;
	background-color: #fafbfc;
	border-radius: 12px;
`;
const InputWrapper = styled(NormalDiv)`
	width: 472px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	input {
		margin-top: 5px;
		background-color: #fafbfc;
		height: 20px;
		font-weight: 600;
		font-size: 18px;
		color: #313c57;
	}
	p {
		font-size: 12px;
		font-weight: 600;
		color: #546182;
	}
`;
const SelectBox = styled(NormalDiv)`
	width: 153px;
	margin-left: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ExchangeInput = () => {
	return (
		<FlexColumnDiv>
			<FlexDiv>
				<InputWrapper>
					<p>전환 수량(FROM)</p>
					<input type="number" />
				</InputWrapper>
				<SelectBox>
					<Icons name="SOL" background={false} size="S" />
					<TbSquareChevronDown fontSize={'18px'} />
				</SelectBox>
			</FlexDiv>
			<RiArrowUpDownLine fontSize={'30px'} color="#546182" />
			<FlexDiv>
				<InputWrapper>
					<p>전환 수량(TO)</p>
					<input type="number" />
				</InputWrapper>
				<SelectBox>
					<Icons name="ETH" background={false} size="S" />
					<TbSquareChevronDown fontSize={'18px'} />
				</SelectBox>
			</FlexDiv>
			<LongButton able={true}>환전</LongButton>
			<HistoryTextBox data={dummyhistory[0]} hasMargin={false} />
		</FlexColumnDiv>
	);
};
export default ExchangeInput;
