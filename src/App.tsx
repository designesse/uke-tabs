import './App.css'
import {NavLink} from "react-router";

function App() {
    return (
        <>
            <h1> Uke Tabs </h1>
            <main>
                <div className="link-list">
                    <NavLink to="/nothing-else-matters">Nothing else matters - Metallica</NavLink>
                    <NavLink to="/the-sound-of-silence">The sound of silence - Disturbed </NavLink>
                    <NavLink to="/sympathy-for-the-devil">Sympathy for the devil - The Rolling Stones</NavLink>
                    <NavLink to="/short-change-hero">Short change hero - The heavy</NavLink>
                    <hr />
                    <NavLink to="/you-ll-be-back">You'll be back - Hamilton</NavLink>
                    <NavLink to="/blank-space">Blank space - Taylor Swift</NavLink>
                    <NavLink to="/defying-gravity">Defying gravity - Wicked</NavLink>
                    <NavLink to="/worlds-smallest-violin">World's smallest violin - AJR</NavLink>
                </div>
            </main>
        </>
    )
}

export default App
