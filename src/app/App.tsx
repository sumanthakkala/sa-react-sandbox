import React from 'react'
import Layout from 'layout'
import HomePage from 'pages/Home'
import './styles.scss'
import Toolbar from '@material-ui/core/Toolbar'

function App() {
  return (
    <div className="root_app">
      <Layout />
      <Toolbar />
      <HomePage />
    </div>
  )
}

export default App
