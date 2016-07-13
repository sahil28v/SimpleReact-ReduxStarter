import React, {Component} from 'react';
import View1 from './View1';
import View2 from './View2';
import styles from './styles/App.css';

const App = () => (
	<div className={styles.container}>
		<h1> Hi All </h1>
		<View1 className={styles.view}/>
	</div>
);

export default App;