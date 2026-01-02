import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import SensorDiagnostics from './pages/sensors'
import AudioVisualizer from './pages/audio'
import FluidSim from './pages/fluid'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sensors" element={<SensorDiagnostics />} />
        <Route path="/audio" element={<AudioVisualizer />} />
        <Route path="/fluid" element={<FluidSim />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
