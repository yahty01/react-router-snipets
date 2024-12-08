import React from 'react';
import s from "../common/components/Site.module.css";
import {Sidebar} from "../common/components/sidebar/Sidebar";
import {Outlet} from "react-router";
import {Header} from "../common/components/Header/Header";
import {Footer} from "../common/components/Footer/Footer";


function App() {
  return (
    <>
      <Header/>
      <div className={s.container}>
        <Sidebar/>
        <div className={s.content}>
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;

