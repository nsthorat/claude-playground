import { Sun, Moon, Sunrise, Sunset } from 'lucide-react'

interface TimeSliderProps {
  value: number // 0-23
  onChange: (hour: number) => void
}

export default function TimeSlider({ value, onChange }: TimeSliderProps) {
  const getTimeIcon = () => {
    if (value >= 5 && value < 8) return <Sunrise className="w-5 h-5 text-orange-400" />
    if (value >= 8 && value < 18) return <Sun className="w-5 h-5 text-yellow-400" />
    if (value >= 18 && value < 21) return <Sunset className="w-5 h-5 text-orange-500" />
    return <Moon className="w-5 h-5 text-blue-400" />
  }

  const formatTime = (hour: number) => {
    const h = hour % 12 || 12
    const ampm = hour < 12 ? 'AM' : 'PM'
    return `${h}:00 ${ampm}`
  }

  const getTimeDescription = () => {
    if (value >= 5 && value < 7) return 'Dawn — Call to prayer, fishermen on Galata Bridge'
    if (value >= 7 && value < 9) return 'Morning — Fresh simit, quiet museums opening'
    if (value >= 9 && value < 12) return 'Mid-morning — Tourist sites filling up'
    if (value >= 12 && value < 14) return 'Lunch — Markets buzzing, Kadıköy peak time'
    if (value >= 14 && value < 17) return 'Afternoon — Museums, Turkish coffee break'
    if (value >= 17 && value < 19) return 'Golden Hour — Rooftops & Bosphorus views'
    if (value >= 19 && value < 21) return 'Evening — Dinner reservations, meyhanes'
    if (value >= 21 && value < 24) return 'Night — Istiklal alive, nightlife begins'
    return 'Late Night — Clubs & late-night köfte'
  }

  const getBackgroundGradient = () => {
    // Create a gradient that represents the day cycle
    return `linear-gradient(to right,
      #1e3a5f 0%,
      #1e3a5f 20%,
      #f97316 25%,
      #fbbf24 35%,
      #fbbf24 55%,
      #f97316 70%,
      #8b5cf6 80%,
      #1e3a5f 90%,
      #1e3a5f 100%
    )`
  }

  // Calculate thumb position percentage
  const thumbPosition = (value / 23) * 100

  return (
    <div className="bg-bg-card rounded-xl p-4 space-y-3">
      {/* Time Display */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {getTimeIcon()}
          <span className="text-xl font-bold text-white">{formatTime(value)}</span>
        </div>
        <span className="text-sm text-text-secondary text-right flex-1">
          {getTimeDescription()}
        </span>
      </div>

      {/* Slider Track */}
      <div className="relative pt-2">
        {/* Background gradient track */}
        <div
          className="h-3 rounded-full"
          style={{ background: getBackgroundGradient() }}
        />

        {/* Invisible range input on top */}
        <input
          type="range"
          min={0}
          max={23}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer"
          style={{ top: '8px' }}
        />

        {/* Custom thumb indicator */}
        <div
          className="absolute top-0 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-bg-primary transform -translate-x-1/2 pointer-events-none"
          style={{ left: `${thumbPosition}%`, top: '7px' }}
        />

        {/* Hour markers */}
        <div className="flex justify-between text-xs text-text-muted mt-2">
          <span>12am</span>
          <span>6am</span>
          <span>12pm</span>
          <span>6pm</span>
          <span>12am</span>
        </div>
      </div>

      {/* Activity Legend */}
      <div className="flex items-center justify-center gap-4 text-xs text-text-muted pt-2">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <span>Quiet</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-white/35" />
          <span>Moderate</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-white/50" />
          <span>Busy</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-white/70" />
          <span>Packed</span>
        </div>
      </div>
    </div>
  )
}
