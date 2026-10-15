import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Accueil from "./Accueil";
import Etudiants from "./Etudiants";
import DetailEtudiant from "./DetailEtudiant";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/etudiants">Etudiants</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/etudiants" element={<Etudiants />} />
        <Route path="/etudiants/:id" element={<DetailEtudiant />} />
      </Routes>
    </BrowserRouter>
  );
}