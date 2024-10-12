import { Route, Routes } from "react-router-dom"
import Footer from "../components/common/Footer"
import NavBar from "../components/common/NavBar"
import NotFound from "../components/common/NotFound"
import Medias from "../components/medias/Medias"
import Generos from "../components/generos/Generos"
import Directores from "../components/directores/Directores"
import Productoras from "../components/productoras/Productoras"
import Tipos from "../components/tipos/Tipos"
import Media from "../components/medias/Media"

export default function AppRouter() {

    const TITLE = 'Películas IUD'

    return (
        <>
            <NavBar title={TITLE} />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Media />} />
                    <Route path="/generos" element={<Generos />} />
                    <Route path="/directores" element={<Directores />} />
                    <Route path="/productoras" element={<Productoras />} />
                    <Route path="/tipos" element={<Tipos />} />
                    <Route path="/medias" element={<Medias />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>


            <Footer />
        </>
    )
}
