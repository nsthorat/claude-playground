import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import SensorDiagnostics from '../../pages/sensors'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SensorDiagnostics />
  </StrictMode>,
)
