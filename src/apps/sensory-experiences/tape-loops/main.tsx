import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import TapeLoops from '../../../pages/sensory-experiences/tape-loops'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TapeLoops />
  </StrictMode>,
)
