import s from "../Site.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageOne} from "../pages/PageOne";
import {PageTwo} from "../pages/PageTwo";
import {PageThree} from "../pages/PageThree";
import {Error404} from "../pages/Error404";
import React from "react";
import {PATH} from "../../../app/App";

type Props = {}

export function Content (props: Props) {
    return (
        <div className={s.content}>
            {/*Группа роутов*/}
            <Routes>
                <Route path={PATH.ADIDAS} element={<PageOne/>}/>
                <Route path={PATH.PUMA} element={<PageTwo/>}/>
                <Route path={PATH.NIKE} element={<PageThree/>}/>
                <Route path={PATH.ERROR} element={<Error404/>}/>
                <Route path={PATH.OTHER} element={<Navigate to={PATH.ERROR}/>}/>
            </Routes>
        </div>
    )
}