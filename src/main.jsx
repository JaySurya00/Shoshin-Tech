import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/navbar.jsx'
import './index.css'
import Sidebar from './components/sidebar/sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <Sidebar/>
      <div className="main-content">
        <NavBar />
        <App />
      </div>
    </div>
  </StrictMode>,
)
