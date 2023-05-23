import React from 'react';
import Icons from '../util/Icons';
import { FlexColumnDiv, FlexDiv, LongButton } from './styled-components';
import { GrTransaction } from 'react-icons/gr';
import { TbSquareChevronDown } from 'react-icons/tb';
import { AiFillRightCircle } from 'react-icons/ai';
import styled from 'styled-components';

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
		background-color: #fafbfc;
		height: 20px;
	}
`;
const SelectBox = styled(NormalDiv)`
	width: 153px;
	margin-left: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ChangeList = styled(NormalDiv)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const ExchangeInput = () => {
	return (
		<FlexColumnDiv>
			<FlexDiv>
				<InputWrapper>
					<p style={{ fontSize: '15px' }}>전환 수량(FROM)</p>
					<input type="number" />
				</InputWrapper>
				<SelectBox>
					<Icons name="SOL" background={false} />
					<TbSquareChevronDown fontSize={'18px'} />
				</SelectBox>
			</FlexDiv>
			<GrTransaction fontSize={'30px'} transform={'rotate(90 0 0)'} />
			<FlexDiv>
				<InputWrapper>
					<p style={{ fontSize: '15px' }}>전환 수량(TO)</p>
					<input type="number" />
				</InputWrapper>
				<SelectBox>
					<Icons name="ETH" background={false} />
					<TbSquareChevronDown fontSize={'18px'} />
				</SelectBox>
			</FlexDiv>
			<LongButton able={true}>환전</LongButton>
			<ChangeList style={{ width: '635px' }}>
				<span>2023-03-12, AM 10:50</span>
				<span>1,302.44 ETH</span>
				<AiFillRightCircle color="#404E71" />
				<span>1,302.44 SOL</span>
			</ChangeList>
		</FlexColumnDiv>
	);
};
export default ExchangeInput;
