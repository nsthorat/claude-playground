import { Video } from 'lucide-react'

export const appConfig = {
  id: 'wordblip',
  title: 'WordBlip',
  description: 'Transform text into speed-reading videos with RSVP technique.',
  icon: <Video className="w-5 h-5" />,
  path: '/wordblip/',
  status: 'available' as const,
  gradient: 'from-[#DAA520]/20 to-[#FFD700]/20',
  order: 5,
}
