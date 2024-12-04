import React from 'react';
import s from "../common/components/Site.module.css";
import {Sidebar} from "../common/components/sidebar/Sidebar";
import {Content} from "../common/components/content/Content";

export const PATH = {
  WELCOME: "/",
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  ERROR: '/undefined',
  OTHER: '/*',
  PRODUCT: '/product',
} as const

function App() {
  return (
    <div>
      <header className={s.header}><h1>HEADER</h1></header>
      <div className={s.container}>
        <Sidebar/>
        <Content/>
      </div>
      <footer className={s.footer}>FOOTER</footer>
    </div>
  );
}

export default App;

