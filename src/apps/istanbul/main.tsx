import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Istanbul from '../../pages/istanbul'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Istanbul />
  </StrictMode>,
)
