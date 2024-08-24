import React from 'react';
import s from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";

function App() {
	return (
		<div>
			<header className={s.header}><h1>HEADER</h1></header>
			<div className={s.body}>
				<nav className={s.nav} id="sidebar">
					{/*Для перехода по роутам*/}
					<NavLink
						className={({isActive}) => isActive ? s.activeNavLink : s.navLink}
						to="/sneaker/1">adidas</NavLink>
					<NavLink
						className={({isActive}) => isActive ? s.activeNavLink : s.navLink}
						to="/sneaker/2">puma</NavLink>
					<NavLink
						className={({isActive}) => isActive ? s.activeNavLink : s.navLink}
						to="/sneaker/3">abibas</NavLink>
				</nav>
				<div className={s.content}>
					{/*Группа роутов*/}
					<Routes>
						<Route path="/sneaker/1" element={<PageOne/>}/>
						<Route path="/sneaker/2" element={<PageTwo/>}/>
						<Route path="/sneaker/3" element={<PageThree/>}/>
						<Route path="/sneaker/undefined" element={<Error404/>}/>
						<Route path="/sneaker/*" element={<Navigate to="/sneaker/undefined"/>}/>
					</Routes>
				</div>
			</div>
			<footer className={s.footer}>abibas 2023</footer>
		</div>
	);
}


export default App;
