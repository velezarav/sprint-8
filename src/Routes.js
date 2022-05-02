import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SpaceFiles from "./components/SpaceFiles";
import SpaceList from "./components/SpaceList";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

export default () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/spaceship-list" element={<SpaceList />}/>
            <Route path="/spaceship-file/:id/" element={<SpaceFiles />} />
            <Route path="/" element={<Welcome />} />
        </Routes>
    </BrowserRouter>
)