import { ChefHat } from 'lucide-react'

export const appConfig = {
  id: 'ribeye',
  title: 'Ribeye Dinner',
  description: '70s cookbook-style cooking timer for the perfect steak dinner',
  icon: <ChefHat className="w-6 h-6" />,
  path: '/ribeye/',
  status: 'available' as const,
  gradient: 'from-orange-500/20 to-yellow-500/20',
  size: 'small' as const,
  order: 4,
}
