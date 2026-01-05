import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import NightDrive from '../../../pages/sensory-experiences/night-drive'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NightDrive />
  </StrictMode>,
)
