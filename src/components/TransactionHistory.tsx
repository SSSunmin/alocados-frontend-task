import React from 'react';
import { IconNameType, IconsImage, iconInfo } from '../util/Icons';
import styled from 'styled-components';
import { Title } from './styled-components';
import { AiOutlineArrowDown, AiFillRightCircle } from 'react-icons/ai';

const HistoryBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 16px;
	border-radius: 12px;
	width: 634px;
	height: 35px;
	background-color: #f4f5f8;
	margin-bottom: 10px;
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
const HistoryFilter = styled(HistoryBox)`
	justify-content: space-between;
	span {
		font-weight: 400;
	}
	span:first-child {
		font-weight: 700;
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
interface historyDataState {
	date: string;
	fromCoin: IconNameType;
	toCoin: IconNameType;
	fromAmount: number;
	toAmount: number;
}
const dummyhistory: historyDataState[] = [
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
			<HistoryFilter>
				<span>
					환전 시간 <AiOutlineArrowDown />
				</span>
				<span>환전 금액</span>
			</HistoryFilter>
			{dummyhistory.map((data) => (
				<HistoryBox key={data.date}>
					<span>{data.date}</span>
					<CoinHistory>
						<p>
							<IconsImage src={iconInfo[data.fromCoin].imgpath} />
							<span>{data.fromAmount}</span>
							<span>{data.fromCoin}</span>
						</p>
						<AiFillRightCircle />
						<p>
							<IconsImage src={iconInfo[data.toCoin].imgpath} />
							<span>{data.toAmount}</span>
							<span>{data.toCoin}</span>
						</p>
					</CoinHistory>
				</HistoryBox>
			))}
		</div>
	);
};

export default TransactionHistory;
