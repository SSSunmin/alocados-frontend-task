import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import Header from './components/Header';
import { tabState } from './recoilState';
import Exchange from './components/Exchange';
import { PageWrapper } from './components/styled-components';
import TransactionHistory from './components/TransactionHistory';

function App() {
	const nowtab = useRecoilValue(tabState);
	return (
		<div className="App">
			<Header />
			<PageWrapper>
				{nowtab === 0 ? <Exchange /> : <TransactionHistory />}
			</PageWrapper>
		</div>
	);
}

export default App;
