import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../index.css'
import Warehouse from '../../../pages/sensory-experiences/warehouse'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Warehouse />
  </StrictMode>,
)
