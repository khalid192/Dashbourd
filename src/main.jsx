import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PList from "./context/context.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <PList>
    <App />
    </PList>
  </StrictMode>,
)
