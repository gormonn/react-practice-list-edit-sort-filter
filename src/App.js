import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Products } from './components'

import './styles.css'

function App () {
  return (
    <div className="App">
      <Router>
        <Products/>
      </Router>
    </div>
  )
}

export default App
