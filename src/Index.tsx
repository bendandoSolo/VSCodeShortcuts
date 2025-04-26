
import './App.css'
import Essential from './components/shortcutCategories/Essential'
import CodeEditingBasics from './components/shortcutCategories/CodeEditingBasics'

import { BoxTest } from './sections/BoxTest'

function Index() {

  return (
    <>
      <BoxTest />
      <Essential />
      <CodeEditingBasics />
    </>
  )
}

export default Index
