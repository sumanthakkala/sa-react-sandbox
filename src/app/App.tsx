import React from 'react'
import Layout from 'layout'
import NetflixPage from 'pages/Netflix'
import './styles.scss'
import Toolbar from '@material-ui/core/Toolbar';


function App() {
  return (
    <div className="root_app">
      <Layout />
      <Toolbar />
        <NetflixPage />
    </div>
  )
}

export default App
