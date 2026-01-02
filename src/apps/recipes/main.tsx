import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Recipes from '../../pages/recipes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Recipes />
  </StrictMode>,
)
