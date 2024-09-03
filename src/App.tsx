import React from 'react';
import s from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {NavWrapper} from "./components/pages/_styles";

const PATH = {
	PAGE1: '/page1',
	PAGE2: '/page2',
	PAGE3: '/page3',
	ERROR: '/undefined',
	OTHER: '/*'
} as const

function App() {
	return (
		<div>
			<header className={s.header}><h1>HEADER</h1></header>
			<div className={s.container}>
				<nav className={s.nav} id="sidebar">
					{/*Для перехода по роутам*/}
					<NavWrapper><NavLink to={PATH.PAGE1}>adidas</NavLink></NavWrapper>
					<NavWrapper> <NavLink to={PATH.PAGE2}>puma</NavLink></NavWrapper>
					<NavWrapper><NavLink to={PATH.PAGE3}>nike</NavLink></NavWrapper>
				</nav>
				<div className={s.content}>
					{/*Группа роутов*/}
					<Routes>
						<Route path= {PATH.PAGE1} element={<PageOne/>}/>
						<Route path={PATH.PAGE2} element={<PageTwo/>}/>
						<Route path={PATH.PAGE3} element={<PageThree/>}/>
						<Route path={PATH.ERROR} element={<Error404/>}/>
						<Route path={PATH.OTHER} element={<Navigate to={PATH.ERROR}/>}/>
					</Routes>
				</div>
			</div>
			<footer className={s.footer}>abibas 2023</footer>
		</div>
	);
}

export default App;

