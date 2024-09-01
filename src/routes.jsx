import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from "./compoents/Navhead";
import Footer from "./compoents/Footer";
import HomePage from "./pages/home";
import ConesPage from "./pages/cones";
import ReliquiasPage from "./pages/reliquias";
import LoginPage from "./pages/login";
import DonatePage from "./pages/donate";
import OrnamentosPage from "./pages/ornamentos";
import TierlistPage from "./pages/tierlist";
import EquipesPage from "./pages/equipes";

function routesApp () {
    return (
        <BrowserRouter>
            <NavbarHeader />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/cones" element={<ConesPage />}></Route>
                <Route path="/reliquias" element={<ReliquiasPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/donate" element={<DonatePage />}></Route>
                <Route path="/ornamentos" element={<OrnamentosPage />}></Route>
                <Route path="/tierlist" element={<TierlistPage />}></Route>
                <Route path="/equipes" element={<EquipesPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default routesApp;