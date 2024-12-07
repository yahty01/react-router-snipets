import React from 'react';
import s from "../common/components/Site.module.css";
import {Sidebar} from "../common/components/sidebar/Sidebar";
import {Outlet} from "react-router";


function App() {
  return (
    <div>
      <header className={s.header}><h1>HEADER</h1></header>
      <div className={s.container}>
        <Sidebar/>
        <div className={s.content}>
          <Outlet/>
        </div>
      </div>
      <footer className={s.footer}>FOOTER</footer>
    </div>
  );
}

export default App;

