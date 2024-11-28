import { Link } from "react-router-dom";

export default function ErrorPage() {
    //state 

    //comportements

    //affichage (render)
  return (
    <div>
    <h1>Error page !</h1>
    <Link to="/" end><button>Retourner à la page d'accueil</button></Link>
  </div>
  )
}
