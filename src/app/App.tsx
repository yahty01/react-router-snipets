import React from 'react';
import s from "../common/components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "../common/components/pages/PageOne";
import {PageTwo} from "../common/components/pages/PageTwo";
import {PageThree} from "../common/components/pages/PageThree";
import {Error404} from "../common/components/pages/Error404";
import {NavWrapper} from "../common/components/pages/_styles";
import {Sidebar} from "../common/components/sidebar/Sidebar";
import {Content} from "../common/components/content/Content";

export const PATH = {
	ADIDAS: '/adidas',
	PUMA: '/puma',
	NIKE: '/nike',
	ERROR: '/undefined',
	OTHER: '/*'
} as const

function App() {
	return (
		<div>
			<header className={s.header}><h1>HEADER</h1></header>
			<div className={s.container}>
			<Sidebar/>
			<Content/>
			</div>
			<footer className={s.footer}>abibas 2023</footer>
		</div>
	);
}

export default App;

