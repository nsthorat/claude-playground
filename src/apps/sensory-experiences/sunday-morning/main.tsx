import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import SundayMorning from '../../../pages/sensory-experiences/sunday-morning'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SundayMorning />
  </StrictMode>,
)
