import { useState } from 'react'
import { MagicCard } from '@/components/ui/magic-card'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

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
        <div className="relative w-full aspect-[430/932] overflow-hidden bg-bg-primary">
          <img
            src={previewImage}
            alt={`${app.title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-bg-card/20 to-transparent" />
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

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 sm:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sliding Tray */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-72 bg-bg-card border-r border-white/10 z-50 transform transition-transform duration-300 ease-out sm:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-text-primary">Apps</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* App List */}
        <nav className="p-2 overflow-y-auto max-h-[calc(100vh-64px)]">
          {discoveredApps.map((app) => {
            const isAvailable = app.status === 'available'

            if (!isAvailable) {
              return (
                <div
                  key={app.id}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg opacity-50"
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br',
                      app.gradient,
                      'text-text-primary'
                    )}
                  >
                    {app.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">{app.title}</p>
                    <p className="text-xs text-text-muted">Coming Soon</p>
                  </div>
                </div>
              )
            }

            return (
              <a
                key={app.id}
                href={`${BASE_PATH}${app.path}`}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br',
                    app.gradient,
                    'text-text-primary'
                  )}
                >
                  {app.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">{app.title}</p>
                  <p className="text-xs text-text-secondary truncate">{app.description}</p>
                </div>
              </a>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Mobile Menu Button - top left, only on mobile */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 z-30 w-10 h-10 flex items-center justify-center rounded-lg bg-bg-card/80 backdrop-blur-sm border border-white/10 sm:hidden"
      >
        <Menu className="w-5 h-5 text-text-primary" />
      </button>

      {/* Mobile Menu Tray */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

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
      </div>
    </div>
  )
}
