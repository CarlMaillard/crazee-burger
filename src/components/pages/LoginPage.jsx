import { useState } from 'react'


export default function Login () {

    //state
    const [prenom, setPrenom] = useState("");    

    //comportements
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        if (prenom.trim() === "") {
            // Le champ est requis, HTML s'en charge avec le "required"
            return;
          } 
        alert(`bonjour ${prenom}`); 

        // Reset le prénom après soumission
        setPrenom("");

    }

    const handleChange = (event) =>{ 
        setPrenom(event.target.value)
    }

    //affichage (render)
  return (
    <>
      <div>
        <h1>Bienvenue chez nous</h1>
        <p>
          Connectez-vous 
        </p>
        <form action="submit" onSubmit={handleSubmit}>
            <input value={prenom}  type="text" placeholder='Entrez votre prénom...' onChange={handleChange} required/>
            <button>Accéder à votre espace</button>
        </form>
        
      </div>          
    </>
  )
}
