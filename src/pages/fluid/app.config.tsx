import { Droplets } from 'lucide-react'

export const appConfig = {
  id: 'fluid',
  title: 'Fluid Simulation',
  description: 'GPU-accelerated fluid dynamics. Tilt your phone to control gravity!',
  icon: <Droplets className="w-8 h-8" />,
  path: '/apps/fluid/',
  status: 'available' as const,
  gradient: 'from-accent-purple/20 to-accent-cyan/20',
  size: 'large' as const,
  order: 2,
}
