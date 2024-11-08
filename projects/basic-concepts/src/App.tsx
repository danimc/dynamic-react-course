import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Cards from './components/Cards'
import Footer from './components/Footer'
import States from './components/States'

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
          <Home/>
          <Cards/>
        </div>
      </div>
      <States bgState={bgPage} updateCounter={updateCounter}/>
      <div className="bottom-0 sticky bg-black p-3 w-full text-white select-none">
        <Footer counter={counter} />
      </div>
    </>
  )
}

export default App