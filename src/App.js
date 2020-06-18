import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderRFC from './components/HeaderRFC';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';


function App() {
	return (
		<div className="App">
			<BaiTapDanLayout></BaiTapDanLayout>
		</div>
	);
}

export default App;
