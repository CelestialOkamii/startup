import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Drop_down_menus from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Drop_down_menus />
  </StrictMode>,
)
