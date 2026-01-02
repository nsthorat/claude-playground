import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Play, Pause, RotateCcw, Check, ChefHat } from 'lucide-react'

const BASE_PATH = '/claude-playground'
import { cn } from '@/lib/utils'

interface TimelineStep {
  id: string
  duration: number // duration in minutes
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

export default function RibeyeRecipe() {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null)
  const [stepTimers, setStepTimers] = useState<Record<string, number>>({})
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize step timers
  useEffect(() => {
    const timers: Record<string, number> = {}
    timeline.forEach(step => {
      timers[step.id] = step.duration * 60 // Convert to seconds
    })
    setStepTimers(timers)
  }, [])

  // Main timer effect
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1)

      // Tick down active step timer
      if (activeStepIndex !== null) {
        const stepId = timeline[activeStepIndex].id
        setStepTimers(prev => {
          const current = prev[stepId]
          if (current <= 0) return prev

          // Play sound when timer hits 0
          if (current === 1) {
            playTimerSound()
          }

          return { ...prev, [stepId]: current - 1 }
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, activeStepIndex])

  const playTimerSound = () => {
    // Create a simple beep using Web Audio API
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
    } catch (e) {
      // Audio not supported
    }
  }

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
    const timers: Record<string, number> = {}
    timeline.forEach(step => {
      timers[step.id] = step.duration * 60
    })
    setStepTimers(timers)
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

  const getComponentStyle = (component: string) => {
    switch (component) {
      case 'steak': return { bg: colors.rust, text: '#fff' }
      case 'potatoes': return { bg: colors.mustard, text: colors.brown }
      case 'chimichurri': return { bg: colors.avocado, text: '#fff' }
      default: return { bg: colors.orange, text: '#fff' }
    }
  }

  const progress = (completedSteps.size / timeline.length) * 100
  const totalTime = timeline.reduce((acc, step) => acc + step.duration, 0)
  const activeStep = activeStepIndex !== null ? timeline[activeStepIndex] : null
  const activeStepTimeRemaining = activeStep ? stepTimers[activeStep.id] : 0

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
            {/* Active Step Timer - Always visible when cooking */}
            {isRunning && activeStep && (
              <div
                className="mb-4 p-4 rounded-lg text-center"
                style={{ backgroundColor: colors.orange + '15' }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: getComponentStyle(activeStep.component).bg,
                      color: getComponentStyle(activeStep.component).text
                    }}
                  >
                    STEP {activeStepIndex! + 1}
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: 'Libre Baskerville, serif',
                      color: colors.brown
                    }}
                  >
                    {activeStep.title}
                  </span>
                </div>

                <div
                  className={cn(
                    "text-5xl font-mono font-bold mb-2",
                    activeStepTimeRemaining <= 30 && activeStepTimeRemaining > 0 && "animate-pulse"
                  )}
                  style={{
                    color: activeStepTimeRemaining <= 0 ? colors.avocado :
                           activeStepTimeRemaining <= 30 ? colors.orange : colors.brown
                  }}
                >
                  {activeStepTimeRemaining <= 0 ? "DONE!" : formatTime(activeStepTimeRemaining)}
                </div>

                <button
                  onClick={completeCurrentStep}
                  className="px-6 py-2 rounded-full font-bold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: colors.avocado }}
                >
                  <Check className="w-4 h-4 inline mr-2" />
                  {activeStepIndex === timeline.length - 1 ? "Finish!" : "Next Step"}
                </button>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {isRunning ? (
                  <div className="text-center">
                    <div className="text-xs" style={{ color: colors.rust }}>Elapsed</div>
                    <div className="font-mono text-xl font-bold" style={{ color: colors.brown }}>
                      {formatElapsed(elapsedTime)}
                    </div>
                  </div>
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
              const timeRemaining = stepTimers[step.id] || 0

              return (
                <div
                  key={step.id}
                  className={cn(
                    'relative border-2 rounded-xl overflow-hidden transition-all cursor-pointer',
                    isActive && 'ring-4 ring-offset-2 scale-[1.02]'
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

                    {/* Timer display */}
                    <div className="text-right">
                      <div
                        className={cn(
                          "font-mono text-lg font-bold",
                          isActive && timeRemaining <= 30 && timeRemaining > 0 && "animate-pulse"
                        )}
                        style={{
                          color: completed ? colors.avocado :
                                 isActive && timeRemaining <= 0 ? colors.avocado :
                                 isActive && timeRemaining <= 30 ? colors.orange :
                                 isActive ? colors.rust : colors.brown + '80'
                        }}
                      >
                        {completed ? '✓' :
                         isActive && timeRemaining <= 0 ? 'DONE!' :
                         formatTime(timeRemaining)}
                      </div>
                      <div className="text-xs" style={{ color: colors.rust }}>
                        {step.duration} min
                      </div>
                    </div>
                  </div>

                  {/* Step Content - expanded when active */}
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
