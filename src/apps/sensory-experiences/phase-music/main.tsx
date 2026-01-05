import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import PhaseMusic from '../../../pages/sensory-experiences/phase-music'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhaseMusic />
  </StrictMode>,
)
