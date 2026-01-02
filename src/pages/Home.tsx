import { MagicCard } from '@/components/ui/magic-card'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

interface MiniApp {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  path: string
  status: 'available' | 'coming-soon'
  gradient: string
  size: 'large' | 'medium' | 'small'
  order?: number
}

// Auto-discover apps from app.config.tsx files
const appConfigModules = import.meta.glob<{ appConfig: MiniApp }>(
  './*/app.config.tsx',
  { eager: true }
)

// Extract and sort app configs
const discoveredApps: MiniApp[] = Object.values(appConfigModules)
  .map(module => module.appConfig)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

function AppCard({ app, index }: { app: MiniApp; index: number }) {
  const isAvailable = app.status === 'available'

  const content = (
    <MagicCard
      className={cn(
        'group cursor-pointer',
        app.size === 'large' ? 'col-span-2 row-span-2' : '',
        !isAvailable && 'opacity-60 cursor-not-allowed'
      )}
      gradientColor={app.gradient.includes('cyan') ? '#00d4ff' : '#aa66ff'}
    >
      <div
        className={cn(
          'p-6 h-full flex flex-col',
          app.size === 'large' ? 'min-h-[200px]' : 'min-h-[120px]'
        )}
        style={{
          animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
        }}
      >
        {/* Icon */}
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
            'bg-gradient-to-br',
            app.gradient,
            'text-text-primary',
            'group-hover:scale-110 transition-transform duration-300'
          )}
        >
          {app.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
          {app.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary flex-1">
          {app.description}
        </p>

        {/* Status Badge */}
        {!isAvailable && (
          <span className="mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-text-muted/20 text-text-muted w-fit">
            Coming Soon
          </span>
        )}

        {isAvailable && (
          <span className="mt-3 inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform">
            Open →
          </span>
        )}
      </div>
    </MagicCard>
  )

  if (isAvailable) {
    return <a href={`${BASE_PATH}${app.path}`} className="contents">{content}</a>
  }

  return content
}

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4">
            Nikhil's Apps
          </h1>
          <p className="text-text-secondary text-lg">
            A collection of mini apps and experiments
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {discoveredApps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-text-muted text-sm" style={{ animation: 'fadeInUp 0.6s ease-out 0.8s both' }}>
          <p className="font-mono">Built with React + Vite + Tailwind</p>
        </footer>
      </div>
    </div>
  )
}
