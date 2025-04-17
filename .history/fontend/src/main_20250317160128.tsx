import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './pages/Home/HomePage/HomePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
