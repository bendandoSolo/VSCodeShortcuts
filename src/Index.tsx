import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <div className="card">
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

      </p>
      <p>
        Pages: 
        1 navigation, primary importance is learing swift navigation
        2. code editing
        3 other 
        4 toDo list
        - 1 set up basic app showing all the useful features we need to remember on one page
        - 3 set up nav bar
        - 2 set up accordion/ use of mui
        - set up pages fore each of 3 above
        - link with google drive
        - make game out of remembering the features
      </p>
    </>
  )
}

export default Index
