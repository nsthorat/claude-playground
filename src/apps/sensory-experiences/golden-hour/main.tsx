import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import GoldenHour from '../../../pages/sensory-experiences/golden-hour'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoldenHour />
  </StrictMode>,
)
