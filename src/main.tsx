import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import YouLlBeBack from "./songs/you-ll-be-back.tsx";
import BlankSpace from "./songs/blank-space.tsx";
import WorldsSmallestViolin from "./songs/worlds-smallest-violin.tsx";
import DefyingGravity from "./songs/defying-gravity.tsx";
import SongWrapper from "./components/song-wrapper.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/you-ll-be-back" element={<SongWrapper><YouLlBeBack /></SongWrapper>} />
                <Route path="/blank-space" element={<SongWrapper><BlankSpace /></SongWrapper>} />
                <Route path="/defying-gravity" element={<SongWrapper><DefyingGravity /></SongWrapper>} />
                <Route path="/worlds-smallest-violin" element={<SongWrapper><WorldsSmallestViolin /></SongWrapper>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
