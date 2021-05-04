import React from 'react';
import Content from "./components/content/content";
import Header from "./components/header/header";
import style from './main.module.scss';

function App() {
	return (
		<main className={style.main}>
			<Header/>
			<Content/>
		</main>
	);
}

export default App;
