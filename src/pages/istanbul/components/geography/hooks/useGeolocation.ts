import { useState, useCallback } from 'react'

interface GeolocationState {
  lat: number
  lon: number
  accuracy: number
}

interface UseGeolocationReturn {
  location: GeolocationState | null
  loading: boolean
  error: string | null
  requestLocation: () => void
}

export function useGeolocation(): UseGeolocationReturn {
  const [location, setLocation] = useState<GeolocationState | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    setLoading(true)
    setError(null)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          accuracy: position.coords.accuracy,
        })
        setLoading(false)
      },
      (err) => {
        setError(
          err.code === 1
            ? 'Location access denied. Please enable location permissions.'
            : err.code === 2
            ? 'Location unavailable. Please try again.'
            : 'Location request timed out. Please try again.'
        )
        setLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000, // Cache for 1 minute
      }
    )
  }, [])

  return { location, loading, error, requestLocation }
}
