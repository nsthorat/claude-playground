import { Smartphone } from 'lucide-react'

export const appConfig = {
  id: 'sensors',
  title: 'Sensor Diagnostics',
  description: 'Test iOS web sensor APIs including motion, orientation, geolocation, and camera.',
  icon: <Smartphone className="w-5 h-5" />,
  path: '/apps/sensors/',
  status: 'available' as const,
  gradient: 'from-accent-cyan/20 to-accent-purple/20',
  order: 1,
}
