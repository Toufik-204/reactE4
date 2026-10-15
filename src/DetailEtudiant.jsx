import { useParams, useNavigate } from "react-router-dom";

export default function DetailEtudiant() {
  const { id } = useParams();
  const navigate = useNavigate();

  const etudiants = [
    { id: 1, nom: "Ahmed", note: 15 },
    { id: 2, nom: "Sara", note: 18 },
    { id: 3, nom: "Youssef", note: 12 }
  ];

  const etudiant = etudiants.find(e => e.id === Number(id));

  if (!etudiant) {
    return <h2>Etudiant introuvable</h2>;
  }

  return (
    <div>
      <h1>Détail de l'étudiant</h1>

      <p>ID : {etudiant.id}</p>
      <p>Nom : {etudiant.nom}</p>
      <p>Note : {etudiant.note}</p>

      <button onClick={() => navigate("/etudiants")}>
        Retour à la liste
      </button>
    </div>
  );
}