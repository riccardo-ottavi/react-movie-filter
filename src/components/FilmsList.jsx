import { useState, useEffect } from "react";

const filmsList =  [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

console.log(filmsList)  



export default function FilmsList(){
    const [selectedGenre, setSelectedGenre] = useState(null)
    const handleSelect = (e) => {
        setSelectedGenre(e.target.value)
    }

    useEffect(() =>{
        console.log("Effetto usato")
    }),[selectedGenre]

    return(
        <div className="list">
        <ul>
        {filmsList.map(film => 
          <li
          //key=
          >{film.title}</li>
        )}
        </ul>
          <select name="Genere" id="Genere" onChange={handleSelect}>
            <option value=""></option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
      </div>
    )
}