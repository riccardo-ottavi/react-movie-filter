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
    </>
  )
}

export default App
