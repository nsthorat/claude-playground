import { ChefHat } from 'lucide-react'

export const appConfig = {
  id: 'recipes',
  title: 'Recipes',
  description: 'Interactive cooking timers and step-by-step recipe guides',
  icon: <ChefHat className="w-5 h-5" />,
  path: '/recipes/',
  status: 'available' as const,
  gradient: 'from-orange-500/20 to-yellow-500/20',
  order: 3,
}
