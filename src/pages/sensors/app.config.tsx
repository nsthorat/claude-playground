import { Smartphone } from 'lucide-react'

export const appConfig = {
  id: 'sensors',
  title: 'Sensor Diagnostics',
  description: 'Test iOS web sensor APIs including motion, orientation, geolocation, and camera.',
  icon: <Smartphone className="w-8 h-8" />,
  path: '/sensors/',
  status: 'available' as const,
  gradient: 'from-accent-cyan/20 to-accent-purple/20',
  size: 'large' as const,
  order: 1,
}
