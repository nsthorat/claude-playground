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

  // Construct preview image path from app path
  const previewImage = `${BASE_PATH}${app.path}og-image.png`

  const content = (
    <MagicCard
      className={cn(
        'group cursor-pointer overflow-hidden',
        !isAvailable && 'opacity-60 cursor-not-allowed'
      )}
      gradientColor={app.gradient.includes('cyan') ? '#00d4ff' : '#aa66ff'}
    >
      <div
        className="h-full flex flex-col"
        style={{
          animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
        }}
      >
        {/* Preview Image */}
        <div className="relative w-full aspect-[1200/630] overflow-hidden bg-bg-primary">
          <img
            src={previewImage}
            alt={`${app.title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-bg-card/20 to-transparent" />

          {/* Icon badge */}
          <div
            className={cn(
              'absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center',
              'bg-gradient-to-br backdrop-blur-sm',
              app.gradient,
              'text-text-primary shadow-lg'
            )}
          >
            {app.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-cyan transition-colors">
            {app.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-secondary flex-1 line-clamp-2">
            {app.description}
          </p>

          {/* Status Badge */}
          <div className="mt-3">
            {!isAvailable && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-text-muted/20 text-text-muted">
                Coming Soon
              </span>
            )}

            {isAvailable && (
              <span className="inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform">
                Open →
              </span>
            )}
          </div>
        </div>
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
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4">
            Nikhil's Apps
          </h1>
          <p className="text-text-secondary text-lg">
            A collection of mini apps and experiments
          </p>
        </header>

        {/* App Grid - 1 column on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
