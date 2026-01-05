import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import DroneCathedral from '../../../pages/sensory-experiences/drone-cathedral'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DroneCathedral />
  </StrictMode>,
)
