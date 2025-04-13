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
      <Essential />
      <CodeEditingBasics />
      <WindowNavigation />
      <NavigationHistory />
      <FileNavigation />
    </>
  )
}

export default Index
