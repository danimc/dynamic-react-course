import './App.css'
import Avatar from './components/AvatarGit'

function App() {
  return (
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
  )
}

export default App
