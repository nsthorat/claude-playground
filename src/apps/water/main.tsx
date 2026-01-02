import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import WaterSimulation from '../../pages/water'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WaterSimulation />
  </StrictMode>,
)
