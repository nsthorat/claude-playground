import { ArrowLeft } from 'lucide-react'
import { MagicCard } from '@/components/ui/magic-card'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

interface Recipe {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  path: string
  time: string
  gradient: string
  order?: number
}

// Auto-discover recipes from recipe.config.tsx files
const recipeConfigModules = import.meta.glob<{ recipeConfig: Recipe }>(
  './*/recipe.config.tsx',
  { eager: true }
)

// Extract and sort recipe configs
const discoveredRecipes: Recipe[] = Object.values(recipeConfigModules)
  .map(module => module.recipeConfig)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

function RecipeCard({ recipe, index }: { recipe: Recipe; index: number }) {
  // Construct preview image path from recipe path
  const previewImage = `${BASE_PATH}${recipe.path}og-image.png`

  return (
    <a href={`${BASE_PATH}${recipe.path}`} className="contents">
      <MagicCard
        className="group cursor-pointer overflow-hidden"
        gradientColor="#E85D04"
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
              alt={`${recipe.title} preview`}
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
                recipe.gradient,
                'text-text-primary shadow-lg'
              )}
            >
              {recipe.icon}
            </div>

            {/* Time badge */}
            <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs font-mono text-white">
              {recipe.time}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            {/* Title */}
            <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-cyan transition-colors">
              {recipe.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-text-secondary flex-1 line-clamp-2">
              {recipe.description}
            </p>

            {/* Open link */}
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-medium text-accent-cyan group-hover:translate-x-1 transition-transform">
                Start Cooking →
              </span>
            </div>
          </div>
        </div>
      </MagicCard>
    </a>
  )
}

export default function Recipes() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <a
          href={`${BASE_PATH}/`}
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan mb-6 transition-colors"
          style={{ animation: 'fadeInUp 0.4s ease-out' }}
          data-og-hide
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Apps
        </a>

        {/* Header */}
        <header className="text-center mb-12" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Recipes
          </h1>
          <p className="text-text-secondary text-lg">
            Interactive cooking timers and step-by-step guides
          </p>
        </header>

        {/* Recipe Grid */}
        {discoveredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {discoveredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-text-muted">
            No recipes yet. Check back soon!
          </div>
        )}
      </div>
    </div>
  )
}
