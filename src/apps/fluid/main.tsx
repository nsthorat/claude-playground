import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import FluidSim from '../../pages/fluid'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluidSim />
  </StrictMode>,
)
