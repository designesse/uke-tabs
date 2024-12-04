import {NavLink} from "react-router";
import React from "react";

const SongWrapper = ({children}: {children: React.ReactElement}) =>
    <>
        <header className="top-sticky">
            <NavLink to="/"> &#8592; </NavLink>
        </header>
        <main>
            { children }
        </main>
    </>

export default SongWrapper;
