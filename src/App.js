import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderRFC from './components/HeaderRFC';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './DataBinding/EventBinding';
import State from './State/State';
import ExState from './State/ExState';
import ExState2 from './State/ExState2';


function App() {
	return (
		<div className="App">
			{/* <DataBinding></DataBinding> */}
			{/* <BaiTapDanLayout></BaiTapDanLayout> */}
			{/* buoi 2 */}
			{/* <EventBinding /> */}
			{/* <State /> */}
			{/* <ExState /> */}
			<ExState2 />
		</div>
	);
}

export default App;
