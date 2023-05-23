import React, { useState } from 'react';
import Icons, { IconNameType } from '../util/Icons';
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
const SelectBoxListWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	position: relative;
`;
const SelectBoxList = styled(SelectBox)`
	height: max-content;
	flex-direction: column;
	align-items: flex-start;
	position: absolute;
	top: -15px;
	div {
		margin-bottom: 10px;
	}
	div:last-child {
		margin-bottom: 0px;
	}
`;
const selectCoinList: IconNameType[] = ['SOL', 'ETH', 'BNB'];

const ExchangeInput = () => {
	const [selectedFromCoin, setSelectedFromCoin] = useState<IconNameType>('SOL');
	const [selectedToCoin, setSelectedToCoin] = useState<IconNameType>('ETH');
	const [ShowFromCoinList, setShowFromCoinList] = useState(false);
	const [ShowToCoinList, setShowToCoinList] = useState(false);

	const ChangeFromCoinHandler = (name: IconNameType) => {
		setSelectedFromCoin(name);
		setShowFromCoinList(false);
	};
	const ChangeToCoinHandler = (name: IconNameType) => {
		setSelectedToCoin(name);
		setShowToCoinList(false);
	};

	return (
		<FlexColumnDiv>
			<FlexDiv>
				<InputWrapper>
					<p>전환 수량(FROM)</p>
					<input type="number" />
				</InputWrapper>
				<SelectBox>
					<Icons
						name={selectedFromCoin}
						background={false}
						size="S"
						mousePointer={false}
					/>
					<TbSquareChevronDown
						fontSize={'18px'}
						onClick={() => setShowFromCoinList((prev) => !prev)}
					/>
				</SelectBox>
			</FlexDiv>
			{ShowFromCoinList ? (
				<SelectBoxListWrapper>
					<SelectBoxList>
						{selectCoinList.map((c) => (
							<Icons
								key={c}
								name={c}
								background={false}
								size="S"
								onClick={ChangeFromCoinHandler}
								mousePointer={true}
							/>
						))}
					</SelectBoxList>
				</SelectBoxListWrapper>
			) : null}

			<RiArrowUpDownLine fontSize={'30px'} color="#546182" />
			<FlexDiv>
				<InputWrapper>
					<p>전환 수량(TO)</p>
					<input type="number" />
				</InputWrapper>
				<SelectBox>
					<Icons
						name={selectedToCoin}
						background={false}
						size="S"
						mousePointer={false}
					/>
					<TbSquareChevronDown
						fontSize={'18px'}
						onClick={() => setShowToCoinList((prev) => !prev)}
					/>
				</SelectBox>
			</FlexDiv>
			{ShowToCoinList ? (
				<SelectBoxListWrapper>
					<SelectBoxList>
						{selectCoinList.map((c) => (
							<Icons
								key={c}
								name={c}
								background={false}
								size="S"
								onClick={ChangeToCoinHandler}
								mousePointer={true}
							/>
						))}
					</SelectBoxList>
				</SelectBoxListWrapper>
			) : null}
			<LongButton able={true}>환전</LongButton>
			<HistoryTextBox data={dummyhistory[0]} hasMargin={false} />
		</FlexColumnDiv>
	);
};
export default ExchangeInput;
