import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import PolyrhythmGarden from '../../../pages/sensory-experiences/polyrhythm-garden'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PolyrhythmGarden />
  </StrictMode>,
)
