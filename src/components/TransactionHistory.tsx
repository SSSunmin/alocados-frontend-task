import React from 'react';
import { IconNameType } from '../util/Icons';
import styled from 'styled-components';
import { Title } from './styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';
import HistoryTextBox, { HistoryBox } from './HistoryTextBox';

const HistoryFilter = styled(HistoryBox)`
	justify-content: space-between;
	height: 48px;
	span {
		font-weight: 400;
	}
	span:first-child {
		font-weight: 700;
	}
`;

export interface historyDataState {
	date: string;
	fromCoin: IconNameType;
	toCoin: IconNameType;
	fromAmount: number;
	toAmount: number;
}
export const dummyhistory: historyDataState[] = [
	{
		date: '2023-03-12, AM10:50',
		fromCoin: 'ETH',
		toCoin: 'SOL',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-11, AM10:50',
		fromCoin: 'ETH',
		toCoin: 'SOL',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-09, AM10:50',
		fromCoin: 'ETH',
		toCoin: 'SOL',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-08, AM10:50',
		fromCoin: 'SOL',
		toCoin: 'ETH',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-07, AM10:50',
		fromCoin: 'BNB',
		toCoin: 'SOL',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-06, AM10:50',
		fromCoin: 'ETH',
		toCoin: 'SOL',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-05, AM10:50',
		fromCoin: 'ETH',
		toCoin: 'SOL',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-04, AM10:50',
		fromCoin: 'SOL',
		toCoin: 'ETH',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
	{
		date: '2023-03-03, AM10:50',
		fromCoin: 'BNB',
		toCoin: 'SOL',
		fromAmount: 1302.44,
		toAmount: 1302.44,
	},
];
const TransactionHistory = () => {
	return (
		<div>
			<Title>환전 내역</Title>
			<HistoryFilter hasMargin={true}>
				<span>
					환전 시간 <AiOutlineArrowDown />
				</span>
				<span>환전 금액</span>
			</HistoryFilter>
			{dummyhistory.map((data) => (
				<HistoryTextBox key={data.date} data={data} hasMargin={true} />
			))}
		</div>
	);
};

export default TransactionHistory;
