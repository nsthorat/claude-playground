import { Music } from 'lucide-react'

export const appConfig = {
  id: 'audio',
  title: 'Audio Visualizer',
  description: '3D audio visualizations with Galaxy & DNA modes',
  icon: <Music className="w-6 h-6" />,
  path: '/audio/',
  status: 'available' as const,
  gradient: 'from-accent-purple/20 to-accent-red/20',
  size: 'small' as const,
  order: 3,
}
