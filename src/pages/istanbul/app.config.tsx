import { Compass } from 'lucide-react'

export const appConfig = {
  id: 'istanbul',
  title: 'Istanbul Guide',
  description: 'Your complete travel guide to Istanbul\'s Galata neighborhood with maps, itineraries, and local tips.',
  icon: <Compass className="w-5 h-5" />,
  path: '/istanbul/',
  status: 'available' as const,
  gradient: 'from-orange-500/20 to-red-500/20',
  order: 5,
}
