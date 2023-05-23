import React from 'react';
import { IconsImage, iconInfo } from '../util/Icons';
import styled from 'styled-components';
import { historyDataState } from './TransactionHistory';
import { AiFillRightCircle } from 'react-icons/ai';

export const HistoryBox = styled.div<{ hasMargin: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 16px;
	border-radius: 12px;
	width: 635px;
	height: 48px;
	background-color: #f4f5f8;
	margin-top: ${(props) => (props.hasMargin ? '10px' : '0px')};
	span {
		color: #2a3249;
		font-size: 14px;
		font-weight: 400;
	}
	p span {
		font-weight: 600;
		color: #404e71;
		font-size: 18px;
	}
	p span:first-child {
		margin-right: 10px;
	}
`;
const CoinHistory = styled.div`
	display: flex;
	flex-grow: 0.6;
	justify-content: space-between;
	align-items: center;
	color: #2a3249;
	p {
		display: flex;
		align-items: center;
	}
	p img {
		margin-right: 5px;
	}
`;
interface HistoryProps {
	data: historyDataState;
	hasMargin: boolean;
}
const HistoryTextBox = ({ data, hasMargin }: HistoryProps) => {
	return (
		<HistoryBox hasMargin={hasMargin}>
			<span>{data.date}</span>
			<CoinHistory>
				<p>
					<IconsImage src={iconInfo[data.fromCoin].imgpath} size="M" />
					<span>{data.fromAmount}</span>
					<span>{data.fromCoin}</span>
				</p>
				<AiFillRightCircle />
				<p>
					<IconsImage src={iconInfo[data.toCoin].imgpath} size="M" />
					<span>{data.toAmount}</span>
					<span>{data.toCoin}</span>
				</p>
			</CoinHistory>
		</HistoryBox>
	);
};

export default HistoryTextBox;
