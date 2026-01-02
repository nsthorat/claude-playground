import { useState, useEffect } from 'react'
import { ArrowLeft, Play, Pause, RotateCcw, Check, ChefHat, Timer } from 'lucide-react'

const BASE_PATH = '/claude-playground'
import { cn } from '@/lib/utils'

interface InlineTimer {
  id: string
  label: string
  duration: number // in seconds
}

interface TimelineStep {
  id: string
  duration: number // duration in minutes
  title: string
  component: 'steak' | 'potatoes' | 'chimichurri' | 'all'
  description: string
  details: string[]
  timers?: InlineTimer[] // optional inline timers
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
    ],
    timers: [
      { id: '1-rest', label: 'Steak rest at room temp', duration: 15 * 60 }
    ]
  },
  {
    id: '2',
    duration: 20,
    title: 'Boil Potatoes',
    component: 'potatoes',
    description: 'Get those spuds tender',
    details: [
      'Add 1.5 lbs baby potatoes to pot with cold water',
      'Add 1 tbsp kosher salt',
      'Bring to boil, then simmer 15–20 min until fork-tender',
      'Preheat oven to 450°F with sheet pan inside'
    ],
    timers: [
      { id: '2-boil', label: 'Potato simmer', duration: 18 * 60 },
      { id: '2-oven', label: 'Oven preheat', duration: 15 * 60 }
    ]
  },
  {
    id: '3',
    duration: 5,
    title: 'Drain & Dry',
    component: 'potatoes',
    description: 'Let potatoes steam off',
    details: [
      'Drain potatoes in colander',
      'Let steam dry for 5 minutes',
      'Mix 3 tbsp olive oil + 2 tbsp melted butter'
    ],
    timers: [
      { id: '3-dry', label: 'Steam dry', duration: 5 * 60 }
    ]
  },
  {
    id: '4',
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
    ],
    timers: [
      { id: '4-roast', label: 'First roast (until flip)', duration: 15 * 60 }
    ]
  },
  {
    id: '5',
    duration: 10,
    title: 'Rotate Pan',
    component: 'potatoes',
    description: 'Even browning time',
    details: [
      'Rotate sheet pan 180°',
      'Continue roasting until golden'
    ],
    timers: [
      { id: '5-roast2', label: 'Second roast', duration: 12 * 60 }
    ]
  },
  {
    id: '6',
    duration: 5,
    title: 'Heat Cast Iron',
    component: 'steak',
    description: 'Get it screaming hot',
    details: [
      'Place cast iron over high heat',
      'Let preheat 5 full minutes until smoking',
      'Smash 3 garlic cloves',
      'Have butter, thyme, rosemary ready'
    ],
    timers: [
      { id: '6-heat', label: 'Cast iron preheat', duration: 5 * 60 }
    ]
  },
  {
    id: '7',
    duration: 5,
    title: 'Sear Side One',
    component: 'steak',
    description: 'Build that beautiful crust',
    details: [
      'Add 2 tbsp avocado oil to pan',
      'Lay ribeye away from you',
      'Sear 4–5 min without moving',
      'Check potatoes—should be golden'
    ],
    timers: [
      { id: '7-sear1', label: 'Sear side 1', duration: 4.5 * 60 }
    ]
  },
  {
    id: '8',
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
    ],
    timers: [
      { id: '8-baste', label: 'Baste time', duration: 3.5 * 60 }
    ]
  },
  {
    id: '9',
    duration: 8,
    title: 'Rest & Garnish',
    component: 'all',
    description: 'Patience pays off',
    details: [
      'Transfer steak to cutting board',
      'Rest 5–8 minutes (don\'t skip!)',
      'Remove potatoes from oven',
      'Top with flaky salt, parsley, chives'
    ],
    timers: [
      { id: '9-rest', label: 'Steak rest', duration: 6 * 60 }
    ]
  },
  {
    id: '10',
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

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function formatElapsed(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins >= 60) {
    const hrs = Math.floor(mins / 60)
    const remainMins = mins % 60
    return `${hrs}h ${remainMins}m`
  }
  return `${mins}m ${secs}s`
}

function playTimerSound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    gainNode.gain.value = 0.3

    oscillator.start()
    setTimeout(() => {
      oscillator.stop()
      audioContext.close()
    }, 200)
  } catch {
    // Audio not supported
  }
}

// Inline Timer Component
function InlineTimerButton({
  timer,
  isRunning,
  timeLeft,
  onStart,
  onPause,
  onReset
}: {
  timer: InlineTimer
  isRunning: boolean
  timeLeft: number
  onStart: () => void
  onPause: () => void
  onReset: () => void
}) {
  const isDone = timeLeft <= 0
  const isUrgent = timeLeft <= 30 && timeLeft > 0

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all",
        isDone && "border-green-500 bg-green-50",
        isRunning && !isDone && "border-orange-500 bg-orange-50",
        !isRunning && !isDone && "border-gray-300 bg-white"
      )}
      style={{
        borderColor: isDone ? colors.avocado : isRunning ? colors.orange : colors.mustard,
        backgroundColor: isDone ? colors.avocado + '15' : isRunning ? colors.orange + '10' : '#fff'
      }}
    >
      <Timer className="w-4 h-4" style={{ color: isDone ? colors.avocado : colors.orange }} />
      <span className="text-sm font-medium" style={{ color: colors.brown }}>
        {timer.label}
      </span>
      <span
        className={cn(
          "font-mono font-bold text-lg min-w-[4rem] text-center",
          isUrgent && "animate-pulse"
        )}
        style={{
          color: isDone ? colors.avocado : isUrgent ? colors.orange : colors.rust
        }}
      >
        {isDone ? '✓ Done' : formatTime(timeLeft)}
      </span>
      {!isDone && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            isRunning ? onPause() : onStart()
          }}
          className="p-1.5 rounded-full transition-colors"
          style={{
            backgroundColor: isRunning ? colors.avocado : colors.orange,
            color: '#fff'
          }}
        >
          {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>
      )}
      {(isDone || (!isRunning && timeLeft < timer.duration)) && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onReset()
          }}
          className="p-1.5 rounded-full transition-colors"
          style={{ backgroundColor: colors.mustard + '40', color: colors.brown }}
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      )}
    </div>
  )
}

export default function RibeyeRecipe() {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null)

  // Inline timers state: { timerId: { timeLeft, isRunning } }
  const [inlineTimers, setInlineTimers] = useState<Record<string, { timeLeft: number, isRunning: boolean }>>({})

  // Initialize inline timers
  useEffect(() => {
    const timers: Record<string, { timeLeft: number, isRunning: boolean }> = {}
    timeline.forEach(step => {
      step.timers?.forEach(timer => {
        timers[timer.id] = { timeLeft: timer.duration, isRunning: false }
      })
    })
    setInlineTimers(timers)
  }, [])

  // Main elapsed time effect
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  // Inline timers countdown effect
  useEffect(() => {
    const runningTimers = Object.entries(inlineTimers).filter(([, state]) => state.isRunning && state.timeLeft > 0)
    if (runningTimers.length === 0) return

    const interval = setInterval(() => {
      setInlineTimers(prev => {
        const updated = { ...prev }
        let shouldPlaySound = false

        Object.keys(updated).forEach(id => {
          if (updated[id].isRunning && updated[id].timeLeft > 0) {
            updated[id] = { ...updated[id], timeLeft: updated[id].timeLeft - 1 }
            if (updated[id].timeLeft === 0) {
              shouldPlaySound = true
            }
          }
        })

        if (shouldPlaySound) {
          playTimerSound()
        }

        return updated
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [inlineTimers])

  const startCooking = () => {
    setIsRunning(true)
    if (activeStepIndex === null) {
      setActiveStepIndex(0)
    }
  }

  const pauseCooking = () => {
    setIsRunning(false)
  }

  const resetAll = () => {
    setIsRunning(false)
    setActiveStepIndex(null)
    setElapsedTime(0)
    setCompletedSteps(new Set())

    // Reset all inline timers
    const timers: Record<string, { timeLeft: number, isRunning: boolean }> = {}
    timeline.forEach(step => {
      step.timers?.forEach(timer => {
        timers[timer.id] = { timeLeft: timer.duration, isRunning: false }
      })
    })
    setInlineTimers(timers)
  }

  const completeCurrentStep = () => {
    if (activeStepIndex === null) return

    const currentStep = timeline[activeStepIndex]
    setCompletedSteps(prev => new Set([...prev, currentStep.id]))

    // Move to next step
    if (activeStepIndex < timeline.length - 1) {
      setActiveStepIndex(activeStepIndex + 1)
    } else {
      setActiveStepIndex(null)
    }
  }

  const jumpToStep = (index: number) => {
    if (!isRunning) {
      startCooking()
    }
    setActiveStepIndex(index)
  }

  const startInlineTimer = (timerId: string) => {
    setInlineTimers(prev => ({
      ...prev,
      [timerId]: { ...prev[timerId], isRunning: true }
    }))
    if (!isRunning) {
      setIsRunning(true)
    }
  }

  const pauseInlineTimer = (timerId: string) => {
    setInlineTimers(prev => ({
      ...prev,
      [timerId]: { ...prev[timerId], isRunning: false }
    }))
  }

  const resetInlineTimer = (timerId: string, duration: number) => {
    setInlineTimers(prev => ({
      ...prev,
      [timerId]: { timeLeft: duration, isRunning: false }
    }))
  }

  const getComponentStyle = (component: string) => {
    switch (component) {
      case 'steak': return { bg: colors.rust, text: '#fff' }
      case 'potatoes': return { bg: colors.mustard, text: colors.brown }
      case 'chimichurri': return { bg: colors.avocado, text: '#fff' }
      default: return { bg: colors.orange, text: '#fff' }
    }
  }

  // Count active inline timers
  const activeInlineTimerCount = Object.values(inlineTimers).filter(t => t.isRunning).length

  const progress = (completedSteps.size / timeline.length) * 100
  const totalTime = timeline.reduce((acc, step) => acc + step.duration, 0)

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
            href={`${BASE_PATH}/recipes/`}
            className="inline-flex items-center gap-2 mb-3 text-sm font-medium transition-colors"
            style={{ color: colors.brown }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recipes
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
              <div className="flex items-center gap-4">
                {isRunning ? (
                  <>
                    <div className="text-center">
                      <div className="text-xs" style={{ color: colors.rust }}>Elapsed</div>
                      <div className="font-mono text-xl font-bold" style={{ color: colors.brown }}>
                        {formatElapsed(elapsedTime)}
                      </div>
                    </div>
                    {activeInlineTimerCount > 0 && (
                      <div className="text-center px-3 py-1 rounded-full" style={{ backgroundColor: colors.orange + '20' }}>
                        <div className="text-xs" style={{ color: colors.orange }}>
                          {activeInlineTimerCount} timer{activeInlineTimerCount > 1 ? 's' : ''} running
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-2" style={{ color: colors.brown }}>
                    <ChefHat className="w-5 h-5" />
                    <span className="text-sm">~{totalTime} min total</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {!isRunning ? (
                  <button
                    onClick={startCooking}
                    className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: colors.orange }}
                  >
                    <Play className="w-4 h-4" />
                    Start Cooking
                  </button>
                ) : (
                  <button
                    onClick={pauseCooking}
                    className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: colors.avocado }}
                  >
                    <Pause className="w-4 h-4" />
                    Pause
                  </button>
                )}
                <button
                  onClick={resetAll}
                  className="p-2 rounded-full transition-colors"
                  style={{ color: colors.brown }}
                  title="Reset"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

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
            ~ The Steps ~
          </h2>

          <div className="space-y-4">
            {timeline.map((step, index) => {
              const completed = completedSteps.has(step.id)
              const isActive = activeStepIndex === index
              const componentStyle = getComponentStyle(step.component)

              return (
                <div
                  key={step.id}
                  className={cn(
                    'relative border-2 rounded-xl overflow-hidden transition-all',
                    isActive && 'ring-4 ring-offset-2 scale-[1.02]',
                    !completed && 'cursor-pointer'
                  )}
                  style={{
                    backgroundColor: completed ? colors.avocado + '15' : '#fff',
                    borderColor: isActive ? colors.orange : colors.brown + '40',
                    ringColor: colors.orange,
                    opacity: completed && !isActive ? 0.7 : 1
                  }}
                  onClick={() => !completed && jumpToStep(index)}
                >
                  {/* Step Header */}
                  <div
                    className="flex items-center justify-between px-4 py-3"
                    style={{
                      backgroundColor: isActive ? colors.orange + '20' : colors.cream
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Step number */}
                      <div
                        className={cn(
                          'w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm',
                          completed && 'scale-110'
                        )}
                        style={{
                          backgroundColor: completed ? colors.avocado : isActive ? colors.orange : colors.brown + '20',
                          color: completed || isActive ? '#fff' : colors.brown
                        }}
                      >
                        {completed ? <Check className="w-4 h-4" /> : index + 1}
                      </div>

                      {/* Step title */}
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

                    {/* Duration badge */}
                    <div className="text-right">
                      <div
                        className="font-mono text-sm font-bold"
                        style={{ color: completed ? colors.avocado : colors.rust }}
                      >
                        {completed ? '✓' : `~${step.duration} min`}
                      </div>
                    </div>
                  </div>

                  {/* Step Content - expanded when active or not running */}
                  {(isActive || !isRunning) && (
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

                      <ul className="space-y-1 mb-3">
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

                      {/* Inline Timers */}
                      {step.timers && step.timers.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t" style={{ borderColor: colors.mustard + '40' }}>
                          {step.timers.map(timer => (
                            <InlineTimerButton
                              key={timer.id}
                              timer={timer}
                              isRunning={inlineTimers[timer.id]?.isRunning || false}
                              timeLeft={inlineTimers[timer.id]?.timeLeft ?? timer.duration}
                              onStart={() => startInlineTimer(timer.id)}
                              onPause={() => pauseInlineTimer(timer.id)}
                              onReset={() => resetInlineTimer(timer.id, timer.duration)}
                            />
                          ))}
                        </div>
                      )}

                      {/* Next step button when active */}
                      {isActive && (
                        <div className="mt-4 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              completeCurrentStep()
                            }}
                            className="px-6 py-2 rounded-full font-bold text-white transition-transform hover:scale-105"
                            style={{ backgroundColor: colors.avocado }}
                          >
                            <Check className="w-4 h-4 inline mr-2" />
                            {activeStepIndex === timeline.length - 1 ? "Finish!" : "Next Step"}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
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
              <p className="mt-2 font-mono text-sm" style={{ color: colors.olive }}>
                Total time: {formatElapsed(elapsedTime)}
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
            ~{totalTime} minutes from start to plate • Serves 1–2
          </p>
        </footer>
      </main>
    </div>
  )
}
