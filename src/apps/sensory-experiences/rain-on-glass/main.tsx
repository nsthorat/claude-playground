import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import RainOnGlass from '../../../pages/sensory-experiences/rain-on-glass'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RainOnGlass />
  </StrictMode>,
)
