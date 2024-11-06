import { useEffect, useState } from 'react'
import './App.css'
import Avatar from './components/AvatarGit'
import Circle from './components/Circle'
import Footer from './components/Footer'

function App() {
  const [counter, setCounter] = useState(0)
  const [bgPage, setBgPage] = useState('bg-gray-300')

  const updateCounter = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    if (counter >= 10) {
      setBgPage('bg-red-900')
    }
  }, [counter])

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="flex flex-wrap justify-center gap-4 w-full text-center">
          <h3> Bienvenidos al curso express </h3>
          <h2>
            <strong>React + Typescript + Tailwind + todo lo que quieran</strong>{' '}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 w-1/2">
            <Avatar name="Daniel el bello" github="danimc" lemma="Aprender para vivir" />
            <Avatar name="BollitoDev" github="bollitoDev" />
            <Avatar name="Abraham El poderoso" github="alegorreta-mex" />
            <Avatar name="Santi el Zen" github="prsantiago" />
          </div>
        </div>
      </div>
      <section
        className={`flex justify-center items-center gap-4  w-full h-screen text-center ${bgPage}`}
      >
        <Circle updateCounter={updateCounter}>
          <p>Presiona aquí para aumentar el contador</p>
        </Circle>
      </section>

      <div className="bottom-0 sticky bg-black p-3 w-full text-white select-none">
        <Footer counter={counter} />
      </div>
    </>
  )
}

export default App
