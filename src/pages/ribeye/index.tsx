import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ChefHat,
  Clock,
  ShoppingCart,
  Utensils,
  Check,
  Play,
  Pause,
  RotateCcw,
  Beef,
  Salad,
  Drumstick
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { MagicCard } from '@/components/ui/magic-card'

type Tab = 'timeline' | 'shopping' | 'ingredients'
type StepStatus = 'pending' | 'active' | 'completed'

interface TimelineStep {
  id: string
  time: string
  minutesBefore: number
  title: string
  component: 'steak' | 'potatoes' | 'chimichurri' | 'all'
  description: string
  details?: string[]
  status: StepStatus
}

interface Ingredient {
  name: string
  amount: string
}

interface ComponentIngredients {
  name: string
  icon: React.ReactNode
  color: string
  items: Ingredient[]
}

const initialTimeline: TimelineStep[] = [
  {
    id: '1',
    time: '5:00 PM',
    minutesBefore: 90,
    title: 'Season steak & make chimichurri',
    component: 'all',
    description: 'Remove ribeye from fridge, season with salt. Make chimichurri sauce.',
    details: [
      'Season ribeye with 1 tsp kosher salt per pound on all sides',
      'Leave uncovered on wire rack at room temperature',
      'Finely chop ½ cup parsley and ¼ cup cilantro',
      'Combine herbs with garlic, vinegar, oregano, red pepper flakes, salt, and olive oil',
      'Set chimichurri aside at room temperature'
    ],
    status: 'pending'
  },
  {
    id: '2',
    time: '5:15 PM',
    minutesBefore: 75,
    title: 'Start boiling potatoes',
    component: 'potatoes',
    description: 'Add potatoes to cold water with salt, bring to boil.',
    details: [
      'Add 1.5 lbs baby potatoes to pot',
      'Cover with cold water, add 1 tbsp kosher salt',
      'Bring to boil over high heat, then reduce to simmer',
      'Cook 15–20 minutes until fork-tender',
      'Preheat oven to 450°F with sheet pan inside'
    ],
    status: 'pending'
  },
  {
    id: '3',
    time: '5:35 PM',
    minutesBefore: 55,
    title: 'Drain potatoes',
    component: 'potatoes',
    description: 'Drain potatoes and let steam dry for 5 minutes.',
    details: [
      'Drain potatoes in colander',
      'Let them steam dry for 5 minutes',
      'Combine 3 tbsp olive oil + 2 tbsp melted butter in small bowl'
    ],
    status: 'pending'
  },
  {
    id: '4',
    time: '5:40 PM',
    minutesBefore: 50,
    title: 'Smash & roast potatoes',
    component: 'potatoes',
    description: 'Smash potatoes on hot pan and roast at 450°F.',
    details: [
      'Remove hot pan from oven, brush with half the oil-butter mixture',
      'Arrange potatoes with space between them',
      'Smash each to ½ inch thick with glass bottom',
      'Brush tops with remaining oil-butter, season with salt and pepper',
      'Roast at 450°F for 25–30 minutes'
    ],
    status: 'pending'
  },
  {
    id: '5',
    time: '5:55 PM',
    minutesBefore: 35,
    title: 'Rotate potato pan',
    component: 'potatoes',
    description: 'Rotate sheet pan 180° for even browning.',
    details: [
      'Rotate sheet pan 180° for even browning',
      'Continue roasting'
    ],
    status: 'pending'
  },
  {
    id: '6',
    time: '6:05 PM',
    minutesBefore: 25,
    title: 'Heat cast iron',
    component: 'steak',
    description: 'Place cast iron over high heat. Prep aromatics.',
    details: [
      'Place cast iron skillet over high heat',
      'Let it preheat for 5 full minutes until smoking',
      'Smash 3 garlic cloves',
      'Have 3 tbsp butter, thyme, and rosemary ready by the stove'
    ],
    status: 'pending'
  },
  {
    id: '7',
    time: '6:10 PM',
    minutesBefore: 20,
    title: 'Sear steak (first side)',
    component: 'steak',
    description: 'Add oil to screaming hot pan, sear 4–5 minutes.',
    details: [
      'Add 2 tbsp avocado oil to screaming hot pan',
      'Lay ribeye away from you',
      'Sear 4–5 minutes without moving—build that crust',
      'Check potatoes—should be getting golden'
    ],
    status: 'pending'
  },
  {
    id: '8',
    time: '6:15 PM',
    minutesBefore: 15,
    title: 'Flip & baste steak',
    component: 'steak',
    description: 'Flip ribeye, add butter and herbs, baste continuously.',
    details: [
      'Flip ribeye',
      'Add 3 tbsp butter, 3 smashed garlic cloves, thyme, rosemary',
      'Tilt pan, baste continuously for 3–4 minutes',
      'Check temp: pull at 120–125°F for medium-rare',
      'Brush potatoes with garlic butter, return to oven for 2 more minutes'
    ],
    status: 'pending'
  },
  {
    id: '9',
    time: '6:20 PM',
    minutesBefore: 10,
    title: 'Rest steak, finish potatoes',
    component: 'all',
    description: 'Transfer steak to rest. Finish and garnish potatoes.',
    details: [
      'Transfer steak to cutting board',
      'Rest 5–8 minutes (don\'t skip!)',
      'Remove potatoes from oven',
      'Transfer to serving platter',
      'Top with flaky salt, 2 tbsp parsley, 1 tbsp chives'
    ],
    status: 'pending'
  },
  {
    id: '10',
    time: '6:28 PM',
    minutesBefore: 2,
    title: 'Slice & plate',
    component: 'all',
    description: 'Slice steak, plate everything, drizzle chimichurri.',
    details: [
      'Slice ribeye against the grain',
      'Arrange on plate or board',
      'Drizzle with collected pan juices',
      'Finish with flaky salt',
      'Spoon chimichurri over steak and potatoes',
      'ENJOY!'
    ],
    status: 'pending'
  }
]

const shoppingList = [
  { category: 'Meat', items: ['1 ribeye steak (12–16 oz, 1.25–1.5" thick)'] },
  { category: 'Produce', items: [
    '1.5 lbs baby potatoes (Yukon Gold or red)',
    '2 heads garlic (~10 cloves)',
    '1 large bunch flat-leaf parsley (¾ cup)',
    '1 small bunch cilantro (¼ cup)',
    '1 small bunch fresh thyme',
    '1 small bunch fresh rosemary',
    '1 small bunch chives (1 tbsp)'
  ]},
  { category: 'Dairy', items: ['5 tbsp unsalted butter'] },
  { category: 'Pantry', items: [
    'Kosher salt',
    'Flaky sea salt (Maldon)',
    'Black pepper',
    'Avocado or grapeseed oil (2 tbsp)',
    'Olive oil (½ cup + 3 tbsp)',
    'Red wine vinegar (2 tbsp)',
    'Dried oregano (1 tsp)',
    'Red pepper flakes (½ tsp)'
  ]}
]

const ingredientsByComponent: ComponentIngredients[] = [
  {
    name: 'Ribeye',
    icon: <Beef className="w-5 h-5" />,
    color: 'accent-red',
    items: [
      { name: 'Ribeye steak', amount: '1 (12–16 oz, 1.25–1.5" thick)' },
      { name: 'Kosher salt', amount: '1 tsp per pound' },
      { name: 'Black pepper', amount: 'to taste' },
      { name: 'Avocado oil', amount: '2 tbsp' },
      { name: 'Butter', amount: '3 tbsp' },
      { name: 'Garlic cloves, smashed', amount: '3' },
      { name: 'Fresh thyme', amount: '2–3 sprigs' },
      { name: 'Fresh rosemary', amount: '1 sprig' },
      { name: 'Flaky salt', amount: 'for finishing' }
    ]
  },
  {
    name: 'Smashed Potatoes',
    icon: <Drumstick className="w-5 h-5" />,
    color: 'accent-yellow',
    items: [
      { name: 'Baby potatoes', amount: '1.5 lbs' },
      { name: 'Kosher salt', amount: '1 tbsp + more' },
      { name: 'Olive oil', amount: '3 tbsp' },
      { name: 'Butter, melted', amount: '2 tbsp' },
      { name: 'Garlic cloves, minced', amount: '4' },
      { name: 'Black pepper', amount: 'to taste' },
      { name: 'Parsley, chopped', amount: '2 tbsp' },
      { name: 'Chives, chopped', amount: '1 tbsp' },
      { name: 'Flaky salt', amount: 'for finishing' }
    ]
  },
  {
    name: 'Chimichurri',
    icon: <Salad className="w-5 h-5" />,
    color: 'accent-green',
    items: [
      { name: 'Parsley, finely chopped', amount: '½ cup' },
      { name: 'Cilantro, finely chopped', amount: '¼ cup' },
      { name: 'Garlic cloves, minced', amount: '3' },
      { name: 'Red wine vinegar', amount: '2 tbsp' },
      { name: 'Dried oregano', amount: '1 tsp' },
      { name: 'Red pepper flakes', amount: '½ tsp' },
      { name: 'Olive oil', amount: '½ cup' },
      { name: 'Kosher salt', amount: '½ tsp' }
    ]
  }
]

export default function RibeyeRecipe() {
  const [activeTab, setActiveTab] = useState<Tab>('timeline')
  const [timeline, setTimeline] = useState<TimelineStep[]>(initialTimeline)
  const [dinnerTime, setDinnerTime] = useState('18:30')
  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  // Update current time every second when running
  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  // Calculate step times based on dinner time
  const getStepTime = useCallback((minutesBefore: number) => {
    const [hours, minutes] = dinnerTime.split(':').map(Number)
    const dinner = new Date()
    dinner.setHours(hours, minutes, 0, 0)
    const stepTime = new Date(dinner.getTime() - minutesBefore * 60 * 1000)
    return stepTime
  }, [dinnerTime])

  // Format time for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  // Get time until step
  const getTimeUntil = (minutesBefore: number) => {
    const stepTime = getStepTime(minutesBefore)
    const diff = stepTime.getTime() - currentTime.getTime()

    if (diff <= 0) return 'Now!'

    const mins = Math.floor(diff / 60000)
    const hours = Math.floor(mins / 60)
    const remainingMins = mins % 60

    if (hours > 0) {
      return `in ${hours}h ${remainingMins}m`
    }
    return `in ${mins}m`
  }

  // Check if step is active (within 5 minutes of start time)
  const isStepActive = (minutesBefore: number) => {
    const stepTime = getStepTime(minutesBefore)
    const diff = stepTime.getTime() - currentTime.getTime()
    return diff <= 0 && diff > -5 * 60 * 1000
  }

  // Toggle step completion
  const toggleStep = (id: string) => {
    setTimeline(prev => prev.map(step => {
      if (step.id === id) {
        return {
          ...step,
          status: step.status === 'completed' ? 'pending' : 'completed'
        }
      }
      return step
    }))
  }

  // Toggle shopping item
  const toggleShoppingItem = (item: string) => {
    setCheckedItems(prev => {
      const next = new Set(prev)
      if (next.has(item)) {
        next.delete(item)
      } else {
        next.add(item)
      }
      return next
    })
  }

  // Reset timeline
  const resetTimeline = () => {
    setTimeline(initialTimeline)
    setIsRunning(false)
  }

  // Get component color
  const getComponentColor = (component: string) => {
    switch (component) {
      case 'steak': return 'text-accent-red'
      case 'potatoes': return 'text-yellow-400'
      case 'chimichurri': return 'text-accent-green'
      default: return 'text-accent-purple'
    }
  }

  const getComponentBg = (component: string) => {
    switch (component) {
      case 'steak': return 'bg-accent-red/20'
      case 'potatoes': return 'bg-yellow-400/20'
      case 'chimichurri': return 'bg-accent-green/20'
      default: return 'bg-accent-purple/20'
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 border-b border-text-muted/20">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-red/30 to-yellow-500/30 flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-accent-red" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-red to-yellow-400 bg-clip-text text-transparent">
                Ribeye Dinner
              </h1>
              <p className="text-text-secondary text-sm">
                Ribeye + Smashed Potatoes + Chimichurri
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="border-b border-text-muted/20 sticky top-0 bg-bg-primary z-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex gap-1">
            {[
              { id: 'timeline' as Tab, label: 'Timeline', icon: <Clock className="w-4 h-4" /> },
              { id: 'shopping' as Tab, label: 'Shopping', icon: <ShoppingCart className="w-4 h-4" /> },
              { id: 'ingredients' as Tab, label: 'Ingredients', icon: <Utensils className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-[2px]',
                  activeTab === tab.id
                    ? 'border-accent-cyan text-accent-cyan'
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto p-4">

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              {/* Timer Controls */}
              <MagicCard gradientColor="#00d4ff" className="overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-4 justify-between">
                    <div className="flex items-center gap-3">
                      <label className="text-text-secondary text-sm">Dinner at:</label>
                      <input
                        type="time"
                        value={dinnerTime}
                        onChange={(e) => setDinnerTime(e.target.value)}
                        className="bg-bg-primary border border-text-muted/30 rounded-lg px-3 py-2 text-text-primary font-mono"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsRunning(!isRunning)}
                        className={cn(
                          'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
                          isRunning
                            ? 'bg-accent-green/20 text-accent-green border border-accent-green/30'
                            : 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                        )}
                      >
                        {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {isRunning ? 'Pause' : 'Start'}
                      </button>
                      <button
                        onClick={resetTimeline}
                        className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-text-muted/20 transition-all"
                        title="Reset"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {isRunning && (
                    <div className="mt-3 text-center">
                      <span className="text-text-muted text-sm">Current time: </span>
                      <span className="font-mono text-accent-cyan">{formatTime(currentTime)}</span>
                    </div>
                  )}
                </div>
              </MagicCard>

              {/* Timeline Steps */}
              <div className="space-y-3">
                {timeline.map((step, index) => {
                  const stepTime = getStepTime(step.minutesBefore)
                  const isActive = isRunning && isStepActive(step.minutesBefore)
                  const isPast = isRunning && currentTime > stepTime && !isActive

                  return (
                    <div
                      key={step.id}
                      className={cn(
                        'relative pl-8 pb-4',
                        index !== timeline.length - 1 && 'border-l-2 border-text-muted/20 ml-3'
                      )}
                    >
                      {/* Timeline dot/checkbox */}
                      <button
                        onClick={() => toggleStep(step.id)}
                        className={cn(
                          'absolute left-0 top-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
                          step.status === 'completed'
                            ? 'bg-accent-green border-accent-green text-bg-primary'
                            : isActive
                            ? 'bg-accent-cyan/20 border-accent-cyan animate-pulse'
                            : 'bg-bg-card border-text-muted/40 hover:border-accent-cyan'
                        )}
                        style={{ transform: 'translateX(-50%)' }}
                      >
                        {step.status === 'completed' && <Check className="w-3 h-3" />}
                      </button>

                      {/* Step content */}
                      <div
                        className={cn(
                          'rounded-lg border p-4 transition-all',
                          step.status === 'completed'
                            ? 'bg-accent-green/5 border-accent-green/20 opacity-60'
                            : isActive
                            ? 'bg-accent-cyan/10 border-accent-cyan/30 shadow-lg shadow-accent-cyan/10'
                            : 'bg-bg-card border-text-muted/20'
                        )}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={cn(
                                'text-xs font-medium px-2 py-0.5 rounded-full',
                                getComponentBg(step.component),
                                getComponentColor(step.component)
                              )}>
                                {step.component === 'all' ? 'All' : step.component}
                              </span>
                            </div>
                            <h3 className={cn(
                              'font-semibold',
                              step.status === 'completed' ? 'line-through text-text-muted' : 'text-text-primary'
                            )}>
                              {step.title}
                            </h3>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="font-mono text-sm text-accent-cyan">
                              {formatTime(stepTime)}
                            </div>
                            {isRunning && step.status !== 'completed' && (
                              <div className={cn(
                                'text-xs',
                                isActive ? 'text-accent-green font-medium' : 'text-text-muted'
                              )}>
                                {getTimeUntil(step.minutesBefore)}
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-text-secondary text-sm mb-2">
                          {step.description}
                        </p>

                        {step.details && (
                          <ul className="space-y-1">
                            {step.details.map((detail, i) => (
                              <li key={i} className="text-text-muted text-xs flex items-start gap-2">
                                <span className="text-accent-cyan mt-1">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Completion message */}
              {timeline.every(s => s.status === 'completed') && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">🥩🥔🌿</div>
                  <h3 className="text-xl font-bold text-accent-green mb-1">Dinner is served!</h3>
                  <p className="text-text-secondary">Enjoy your perfectly cooked ribeye</p>
                </div>
              )}
            </div>
          )}

          {/* Shopping Tab */}
          {activeTab === 'shopping' && (
            <div className="space-y-6">
              <p className="text-text-secondary text-sm">
                Tap items to check them off as you shop.
              </p>

              {shoppingList.map(category => (
                <div key={category.category}>
                  <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map(item => (
                      <button
                        key={item}
                        onClick={() => toggleShoppingItem(item)}
                        className={cn(
                          'w-full text-left p-3 rounded-lg border transition-all flex items-center gap-3',
                          checkedItems.has(item)
                            ? 'bg-accent-green/10 border-accent-green/30 text-text-muted line-through'
                            : 'bg-bg-card border-text-muted/20 text-text-primary hover:border-accent-cyan/30'
                        )}
                      >
                        <div className={cn(
                          'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all',
                          checkedItems.has(item)
                            ? 'bg-accent-green border-accent-green'
                            : 'border-text-muted/40'
                        )}>
                          {checkedItems.has(item) && <Check className="w-3 h-3 text-bg-primary" />}
                        </div>
                        <span className="text-sm">{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center py-4">
                <span className="text-text-muted text-sm">
                  {checkedItems.size} of {shoppingList.reduce((acc, c) => acc + c.items.length, 0)} items checked
                </span>
              </div>
            </div>
          )}

          {/* Ingredients Tab */}
          {activeTab === 'ingredients' && (
            <div className="space-y-6">
              {ingredientsByComponent.map(component => (
                <MagicCard
                  key={component.name}
                  gradientColor={
                    component.color === 'accent-red' ? '#ff4466' :
                    component.color === 'accent-yellow' ? '#ffaa00' :
                    '#00ff88'
                  }
                >
                  <div className="p-4">
                    <h3 className={cn(
                      'font-semibold mb-4 flex items-center gap-2',
                      `text-${component.color}`
                    )}>
                      <span className={cn(
                        'w-8 h-8 rounded-lg flex items-center justify-center',
                        component.color === 'accent-red' ? 'bg-accent-red/20' :
                        component.color === 'accent-yellow' ? 'bg-yellow-400/20' :
                        'bg-accent-green/20'
                      )}>
                        {component.icon}
                      </span>
                      {component.name}
                    </h3>

                    <div className="space-y-2">
                      {component.items.map(item => (
                        <div
                          key={item.name}
                          className="flex justify-between items-center py-2 border-b border-text-muted/10 last:border-0"
                        >
                          <span className="text-text-primary text-sm">{item.name}</span>
                          <span className="text-text-secondary text-sm font-mono">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-text-muted/20 p-4">
        <div className="max-w-2xl mx-auto text-center text-text-muted text-xs">
          90 min total cook time • Serves 1-2
        </div>
      </footer>
    </div>
  )
}
