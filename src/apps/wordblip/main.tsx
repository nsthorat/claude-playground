import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import WordBlip from '../../pages/wordblip'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WordBlip />
  </StrictMode>,
)
