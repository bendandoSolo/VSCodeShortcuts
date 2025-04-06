import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReadMe } from './sections/ReadMe.tsx'
import Essential from './components/shortcutCategories/Essential'
import CodeEditingBasics from './components/shortcutCategories/CodeEditingBasics'
import WindowNavigation from './components/shortcutCategories/WindowNavigation'
import NavigationHistory from './components/shortcutCategories/NavigationHistory'
import FileNavigation from './components/shortcutCategories/FileNavigation'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/*  TODO: Add a ReadMe and add the extension to view MD files, perhaps project for the same */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p> 
        Testing the development using vite , quick loading, and react router, 

      </p> */}
      <ReadMe />
      <Essential />
      <CodeEditingBasics />
      <WindowNavigation />
      <NavigationHistory />
      <FileNavigation />
      <p>
       
      </p>
    </>
  )
}

export default Index
