import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import GlassAndSteel from '../../../pages/sensory-experiences/glass-and-steel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlassAndSteel />
  </StrictMode>,
)
