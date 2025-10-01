import './App.css'
import MyHeader from './components/MyHeader'

const filmsList =  [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

console.log(filmsList)  

function App() {
  return (
    <>
      <MyHeader/>
      <div className="list">
        <ul>
        {filmsList.map(film => 
          <li
          //key=
          >{film.title}</li>
        )}
        </ul>
          <select name="Genere" id="Genere">
            <option value=""></option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
      </div>
    </>
  )
}

export default App
