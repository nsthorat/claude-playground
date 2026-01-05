import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import SensoryExperiences from '../../pages/sensory-experiences'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SensoryExperiences />
  </StrictMode>,
)
