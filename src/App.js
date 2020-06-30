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
import RenderWithMap from './renderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps';
import BT2ProductList from './Props/BT2ProductList/BT2ProductList';
import BT3Phone from './Props/BT3Phone/BT3Phone';
import BT3List from './Props/BT3LamLai/BT3List';


function App() {
	return (
		<div className="App">
			{/* <DataBinding></DataBinding> */}
			{/* <BaiTapDanLayout></BaiTapDanLayout> */}
			{/* buoi 2 */}
			{/* <EventBinding /> */}
			{/* <State /> */}
			{/* <ExState /> */}
			{/* <ExState2 /> */}
			{/* <RenderWithMap /> */}
			{/* buôi 3 */}
			{/* <DemoProps /> */}
			{/* <BT2ProductList /> */}
			{/* <BT3Phone /> */}
			<BT3List />
		</div>
	);
}

export default App;
