import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import GlitchGarden from '../../../pages/sensory-experiences/glitch-garden'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlitchGarden />
  </StrictMode>,
)
