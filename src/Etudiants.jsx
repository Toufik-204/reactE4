import { Link } from "react-router-dom";

export default function Etudiants() {
  const etudiants = [
    { id: 1, nom: "Ahmed", note: 15 },
    { id: 2, nom: "Sara", note: 18 },
    { id: 3, nom: "Youssef", note: 12 }
  ];

  return (
    <div>
      <h1>Liste des étudiants</h1>

      {etudiants.map((e) => (
        <div key={e.id}>
          <p>Nom : {e.nom}</p>
          <p>Note : {e.note}</p>
          <Link to={`/etudiants/${e.id}`}>
            Voir détail
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}