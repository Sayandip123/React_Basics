import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




import App1 from './App1.jsx'
import Music from './Components/CardNav.jsx'
import Cards from './Components/Cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Cards/>

  </StrictMode>,
)
