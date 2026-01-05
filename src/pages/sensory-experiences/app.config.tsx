import { Sparkles } from 'lucide-react'

export const appConfig = {
  id: 'sensory-experiences',
  title: 'Sensory Experiences',
  description: 'Immersive audio-visual experiences with evolving compositions.',
  icon: <Sparkles className="w-5 h-5" />,
  path: '/sensory-experiences/',
  status: 'available' as const,
  gradient: 'from-purple-500/20 to-pink-500/20',
  order: 3,
}
