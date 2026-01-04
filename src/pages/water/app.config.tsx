import { Waves } from 'lucide-react'

export const appConfig = {
  id: 'water',
  title: 'Water Simulation',
  description: 'Realistic GPU water waves. Tilt your phone to make waves slosh!',
  icon: <Waves className="w-8 h-8" />,
  path: '/water/',
  status: 'available' as const,
  gradient: 'from-blue-500/20 to-cyan-400/20',
  size: 'large' as const,
  order: 1,
}
