import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Presentation from './components/Presentation'
import About from './components/About'
import Proyects from './components/Proyects'




function App() {
  

  return (
    <div>
      <div className='Page Presentation'>
        <Presentation />
      </div>
      <div className='Page Description'>
        <About />
      </div>
      <div className='Page Proyects'>
        <Proyects />
      </div>
    </div>
  )
}

export default App
