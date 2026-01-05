import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import MidnightPiano from '../../../pages/sensory-experiences/midnight-piano'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MidnightPiano />
  </StrictMode>,
)
