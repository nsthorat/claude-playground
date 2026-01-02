import { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, Play, Pause, RotateCcw, Check } from 'lucide-react'

const BASE_PATH = '/claude-playground'
import { cn } from '@/lib/utils'

interface TimelineStep {
  id: string
  minutesBefore: number
  duration: number // duration in minutes for this step
  title: string
  component: 'steak' | 'potatoes' | 'chimichurri' | 'all'
  description: string
  details: string[]
}

interface Ingredient {
  name: string
  amount: string
}

interface ComponentIngredients {
  name: string
  emoji: string
  items: Ingredient[]
}

const timeline: TimelineStep[] = [
  {
    id: '1',
    minutesBefore: 90,
    duration: 15,
    title: 'Season & Prep',
    component: 'all',
    description: 'Season the steak, make the chimichurri',
    details: [
      'Remove ribeye from fridge, season all sides with 1 tsp kosher salt per pound',
      'Leave uncovered on wire rack at room temperature',
      'Finely chop ½ cup parsley and ¼ cup cilantro',
      'Mix herbs with minced garlic, vinegar, oregano, red pepper flakes, salt',
      'Stir in ½ cup olive oil, set aside'
    ]
  },
  {
    id: '2',
    minutesBefore: 75,
    duration: 20,
    title: 'Boil Potatoes',
    component: 'potatoes',
    description: 'Get those spuds tender',
    details: [
      'Add 1.5 lbs baby potatoes to pot with cold water',
      'Add 1 tbsp kosher salt',
      'Bring to boil, then simmer 15–20 min until fork-tender',
      'Preheat oven to 450°F with sheet pan inside'
    ]
  },
  {
    id: '3',
    minutesBefore: 55,
    duration: 5,
    title: 'Drain & Dry',
    component: 'potatoes',
    description: 'Let potatoes steam off',
    details: [
      'Drain potatoes in colander',
      'Let steam dry for 5 minutes',
      'Mix 3 tbsp olive oil + 2 tbsp melted butter'
    ]
  },
  {
    id: '4',
    minutesBefore: 50,
    duration: 15,
    title: 'Smash & Roast',
    component: 'potatoes',
    description: 'Get crispy edges going',
    details: [
      'Brush hot pan with half the oil-butter',
      'Arrange potatoes with space between',
      'Smash to ½ inch thick with glass bottom',
      'Brush tops, season with salt & pepper',
      'Roast at 450°F for 25–30 min total'
    ]
  },
  {
    id: '5',
    minutesBefore: 35,
    duration: 10,
    title: 'Rotate Pan',
    component: 'potatoes',
    description: 'Even browning time',
    details: [
      'Rotate sheet pan 180°',
      'Continue roasting until golden'
    ]
  },
  {
    id: '6',
    minutesBefore: 25,
    duration: 5,
    title: 'Heat Cast Iron',
    component: 'steak',
    description: 'Get it screaming hot',
    details: [
      'Place cast iron over high heat',
      'Let preheat 5 full minutes until smoking',
      'Smash 3 garlic cloves',
      'Have butter, thyme, rosemary ready'
    ]
  },
  {
    id: '7',
    minutesBefore: 20,
    duration: 5,
    title: 'Sear Side One',
    component: 'steak',
    description: 'Build that beautiful crust',
    details: [
      'Add 2 tbsp avocado oil to pan',
      'Lay ribeye away from you',
      'Sear 4–5 min without moving',
      'Check potatoes—should be golden'
    ]
  },
  {
    id: '8',
    minutesBefore: 15,
    duration: 5,
    title: 'Flip & Baste',
    component: 'steak',
    description: 'Butter bath time',
    details: [
      'Flip the ribeye',
      'Add 3 tbsp butter, garlic, thyme, rosemary',
      'Tilt pan and baste continuously 3–4 min',
      'Pull at 120–125°F for medium-rare',
      'Brush potatoes with garlic butter, 2 more min'
    ]
  },
  {
    id: '9',
    minutesBefore: 10,
    duration: 8,
    title: 'Rest & Garnish',
    component: 'all',
    description: 'Patience pays off',
    details: [
      'Transfer steak to cutting board',
      'Rest 5–8 minutes (don\'t skip!)',
      'Remove potatoes from oven',
      'Top with flaky salt, parsley, chives'
    ]
  },
  {
    id: '10',
    minutesBefore: 2,
    duration: 2,
    title: 'Slice & Serve',
    component: 'all',
    description: 'The grand finale',
    details: [
      'Slice ribeye against the grain',
      'Drizzle with pan juices',
      'Finish with flaky salt',
      'Spoon chimichurri over everything',
      'Dig in!'
    ]
  }
]

const ingredients: ComponentIngredients[] = [
  {
    name: 'The Ribeye',
    emoji: '🥩',
    items: [
      { name: 'Ribeye steak', amount: '12–16 oz' },
      { name: 'Kosher salt', amount: '1 tsp/lb' },
      { name: 'Black pepper', amount: 'to taste' },
      { name: 'Avocado oil', amount: '2 tbsp' },
      { name: 'Butter', amount: '3 tbsp' },
      { name: 'Garlic, smashed', amount: '3 cloves' },
      { name: 'Fresh thyme', amount: '2–3 sprigs' },
      { name: 'Fresh rosemary', amount: '1 sprig' }
    ]
  },
  {
    name: 'Smashed Potatoes',
    emoji: '🥔',
    items: [
      { name: 'Baby potatoes', amount: '1.5 lbs' },
      { name: 'Kosher salt', amount: '1 tbsp+' },
      { name: 'Olive oil', amount: '3 tbsp' },
      { name: 'Butter, melted', amount: '2 tbsp' },
      { name: 'Garlic, minced', amount: '4 cloves' },
      { name: 'Parsley', amount: '2 tbsp' },
      { name: 'Chives', amount: '1 tbsp' }
    ]
  },
  {
    name: 'Chimichurri',
    emoji: '🌿',
    items: [
      { name: 'Parsley, chopped', amount: '½ cup' },
      { name: 'Cilantro, chopped', amount: '¼ cup' },
      { name: 'Garlic, minced', amount: '3 cloves' },
      { name: 'Red wine vinegar', amount: '2 tbsp' },
      { name: 'Dried oregano', amount: '1 tsp' },
      { name: 'Red pepper flakes', amount: '½ tsp' },
      { name: 'Olive oil', amount: '½ cup' },
      { name: 'Kosher salt', amount: '½ tsp' }
    ]
  }
]

// 70s color palette
const colors = {
  cream: '#FDF6E3',
  orange: '#E85D04',
  brown: '#6B4423',
  avocado: '#7CB518',
  mustard: '#E09F3E',
  rust: '#9C4A1A',
  olive: '#606C38',
}

export default function RibeyeRecipe() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const [dinnerTime, setDinnerTime] = useState('18:30')
  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null)

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  const getDinnerDate = useCallback(() => {
    const [hours, minutes] = dinnerTime.split(':').map(Number)
    const dinner = new Date()
    dinner.setHours(hours, minutes, 0, 0)
    if (dinner < new Date()) {
      dinner.setDate(dinner.getDate() + 1)
    }
    return dinner
  }, [dinnerTime])

  const getStepTime = useCallback((minutesBefore: number) => {
    return new Date(getDinnerDate().getTime() - minutesBefore * 60 * 1000)
  }, [getDinnerDate])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const getCountdown = (minutesBefore: number) => {
    const stepTime = getStepTime(minutesBefore)
    const diff = stepTime.getTime() - currentTime.getTime()

    if (diff <= 0) {
      const overBy = Math.abs(diff)
      const mins = Math.floor(overBy / 60000)
      if (mins < 1) return 'NOW!'
      return `${mins}m ago`
    }

    const totalMins = Math.floor(diff / 60000)
    const hours = Math.floor(totalMins / 60)
    const mins = totalMins % 60

    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  }

  const isStepActive = (minutesBefore: number, duration: number) => {
    const stepTime = getStepTime(minutesBefore)
    const endTime = new Date(stepTime.getTime() + duration * 60 * 1000)
    return currentTime >= stepTime && currentTime < endTime
  }

  const isStepPast = (minutesBefore: number, duration: number) => {
    const endTime = new Date(getStepTime(minutesBefore).getTime() + duration * 60 * 1000)
    return currentTime >= endTime
  }

  const toggleStep = (id: string) => {
    setCompletedSteps(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const getComponentStyle = (component: string) => {
    switch (component) {
      case 'steak': return { bg: colors.rust, text: '#fff' }
      case 'potatoes': return { bg: colors.mustard, text: colors.brown }
      case 'chimichurri': return { bg: colors.avocado, text: '#fff' }
      default: return { bg: colors.orange, text: '#fff' }
    }
  }

  const progress = (completedSteps.size / timeline.length) * 100

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* Header */}
      <header
        className="sticky top-0 z-20 border-b-4"
        style={{
          backgroundColor: colors.cream,
          borderColor: colors.brown
        }}
      >
        <div className="max-w-2xl mx-auto px-4 py-4">
          <a
            href={`${BASE_PATH}/`}
            className="inline-flex items-center gap-2 mb-3 text-sm font-medium transition-colors"
            style={{ color: colors.brown }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Apps
          </a>

          {/* Title */}
          <div className="text-center mb-4">
            <h1
              className="text-4xl md:text-5xl font-bold italic mb-1"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: colors.brown
              }}
            >
              Ribeye Dinner
            </h1>
            <p
              className="text-lg"
              style={{
                fontFamily: 'Libre Baskerville, serif',
                color: colors.rust
              }}
            >
              with Smashed Potatoes & Chimichurri
            </p>
          </div>

          {/* Timer Controls */}
          <div
            className="rounded-xl p-4 border-2"
            style={{
              backgroundColor: '#fff',
              borderColor: colors.orange
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <label
                  className="text-sm font-semibold"
                  style={{ color: colors.brown }}
                >
                  Dinner at:
                </label>
                <input
                  type="time"
                  value={dinnerTime}
                  onChange={(e) => setDinnerTime(e.target.value)}
                  className="border-2 rounded-lg px-3 py-2 font-mono text-lg"
                  style={{
                    borderColor: colors.mustard,
                    color: colors.brown
                  }}
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: isRunning ? colors.avocado : colors.orange }}
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isRunning ? 'Pause' : 'Start'}
                </button>
                <button
                  onClick={() => {
                    setCompletedSteps(new Set())
                    setIsRunning(false)
                  }}
                  className="p-2 rounded-full transition-colors"
                  style={{ color: colors.brown }}
                  title="Reset"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {isRunning && (
              <div className="mt-3 text-center">
                <span style={{ color: colors.rust }} className="font-mono text-2xl font-bold">
                  {formatTime(currentTime)}
                </span>
              </div>
            )}

            {/* Progress bar */}
            <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.mustard + '40' }}>
              <div
                className="h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${progress}%`,
                  backgroundColor: colors.avocado
                }}
              />
            </div>
            <p className="text-center text-sm mt-1" style={{ color: colors.brown }}>
              {completedSteps.size} of {timeline.length} steps complete
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Ingredients Section */}
        <section className="mb-8">
          <h2
            className="text-2xl font-bold italic mb-4 text-center"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: colors.brown
            }}
          >
            ~ Ingredients ~
          </h2>

          <div className="grid gap-3">
            {ingredients.map((group) => (
              <div
                key={group.name}
                className="border-2 rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#fff',
                  borderColor: colors.mustard
                }}
              >
                <button
                  onClick={() => setExpandedIngredient(
                    expandedIngredient === group.name ? null : group.name
                  )}
                  className="w-full px-4 py-3 flex items-center justify-between"
                  style={{ backgroundColor: colors.mustard + '20' }}
                >
                  <span
                    className="font-bold flex items-center gap-2"
                    style={{
                      fontFamily: 'Libre Baskerville, serif',
                      color: colors.brown
                    }}
                  >
                    <span className="text-2xl">{group.emoji}</span>
                    {group.name}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: colors.rust }}
                  >
                    {expandedIngredient === group.name ? '▲' : '▼'}
                  </span>
                </button>

                {expandedIngredient === group.name && (
                  <div className="px-4 py-3 grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between text-sm py-1 border-b"
                        style={{ borderColor: colors.mustard + '30' }}
                      >
                        <span style={{ color: colors.brown }}>{item.name}</span>
                        <span
                          className="font-mono text-xs"
                          style={{ color: colors.rust }}
                        >
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <h2
            className="text-2xl font-bold italic mb-4 text-center"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: colors.brown
            }}
          >
            ~ The Timeline ~
          </h2>

          <div className="space-y-4">
            {timeline.map((step, index) => {
              const completed = completedSteps.has(step.id)
              const active = isRunning && isStepActive(step.minutesBefore, step.duration)
              const past = isRunning && isStepPast(step.minutesBefore, step.duration)
              const componentStyle = getComponentStyle(step.component)
              const stepTime = getStepTime(step.minutesBefore)

              return (
                <div
                  key={step.id}
                  className={cn(
                    'relative border-2 rounded-xl overflow-hidden transition-all',
                    active && 'ring-4 ring-offset-2 scale-[1.02]'
                  )}
                  style={{
                    backgroundColor: completed ? colors.avocado + '15' : '#fff',
                    borderColor: active ? colors.orange : colors.brown + '40',
                    ringColor: colors.orange,
                    opacity: completed && !active ? 0.7 : 1
                  }}
                >
                  {/* Step Header */}
                  <div
                    className="flex items-center justify-between px-4 py-3"
                    style={{
                      backgroundColor: active ? colors.orange + '20' : colors.cream
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleStep(step.id)}
                        className={cn(
                          'w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all',
                          completed ? 'scale-110' : 'hover:scale-105'
                        )}
                        style={{
                          backgroundColor: completed ? colors.avocado : 'transparent',
                          borderColor: completed ? colors.avocado : colors.brown
                        }}
                      >
                        {completed && <Check className="w-4 h-4 text-white" />}
                      </button>

                      {/* Step number & title */}
                      <div>
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full mr-2"
                          style={{
                            backgroundColor: componentStyle.bg,
                            color: componentStyle.text
                          }}
                        >
                          {step.component === 'all' ? 'ALL' : step.component.toUpperCase()}
                        </span>
                        <span
                          className={cn(
                            'font-bold',
                            completed && 'line-through'
                          )}
                          style={{
                            fontFamily: 'Libre Baskerville, serif',
                            color: colors.brown
                          }}
                        >
                          {step.title}
                        </span>
                      </div>
                    </div>

                    {/* Timer */}
                    <div className="text-right">
                      <div
                        className="font-mono text-sm"
                        style={{ color: colors.rust }}
                      >
                        {formatTime(stepTime)}
                      </div>
                      {isRunning && !completed && (
                        <div
                          className={cn(
                            'text-xs font-bold',
                            active && 'animate-pulse'
                          )}
                          style={{
                            color: active ? colors.orange : colors.olive
                          }}
                        >
                          {getCountdown(step.minutesBefore)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="px-4 py-3">
                    <p
                      className="italic mb-3"
                      style={{
                        fontFamily: 'Libre Baskerville, serif',
                        color: colors.rust
                      }}
                    >
                      {step.description}
                    </p>

                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-sm flex items-start gap-2"
                          style={{ color: colors.brown }}
                        >
                          <span style={{ color: colors.orange }}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Duration badge */}
                    <div
                      className="mt-3 inline-block text-xs font-mono px-2 py-1 rounded"
                      style={{
                        backgroundColor: colors.mustard + '30',
                        color: colors.brown
                      }}
                    >
                      ~{step.duration} min
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Completion celebration */}
          {completedSteps.size === timeline.length && (
            <div
              className="mt-8 text-center py-8 rounded-xl border-4"
              style={{
                borderColor: colors.avocado,
                backgroundColor: colors.avocado + '10'
              }}
            >
              <div className="text-6xl mb-4">🥩🥔🌿</div>
              <h3
                className="text-3xl font-bold italic mb-2"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: colors.brown
                }}
              >
                Dinner is Served!
              </h3>
              <p style={{ color: colors.rust }}>
                Enjoy your perfectly cooked ribeye
              </p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer
          className="mt-12 text-center py-6 border-t-2"
          style={{ borderColor: colors.brown + '30' }}
        >
          <p
            className="text-sm italic"
            style={{
              fontFamily: 'Libre Baskerville, serif',
              color: colors.rust
            }}
          >
            90 minutes from start to plate • Serves 1–2
          </p>
        </footer>
      </main>
    </div>
  )
}
