import './App.css'
import {NavLink} from "react-router";

function App() {
    return (
        <>
            <h1> Uke Tabs </h1>
            <main>
                <div className="link-list">
                    <NavLink to="/you-ll-be-back">You'll be back - Hamilton</NavLink>
                    <NavLink to="/blank-space">Blank space - Taylor Swift</NavLink>
                    <NavLink to="/defying-gravity">Defying Gravity - Wicked</NavLink>
                    <NavLink to="/worlds-smallest-violin">World's smallest violin - AJR</NavLink>
                </div>
            </main>
        </>
    )
}

export default App
