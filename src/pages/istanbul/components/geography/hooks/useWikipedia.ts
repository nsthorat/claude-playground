import { useState, useEffect } from 'react'

export interface WikiData {
  title: string
  description: string
  extract: string
  thumbnail?: string
  url: string
}

export function useWikipedia(title: string | null): { data: WikiData | null; loading: boolean } {
  const [data, setData] = useState<WikiData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!title) {
      setData(null)
      return
    }

    const fetchWiki = async () => {
      setLoading(true)
      try {
        // Clean up title for Wikipedia search
        // Try various transformations to find the article
        const searchVariants = [
          title.replace(/\s+/g, '_'),
          title.replace(/\s+/g, '_').replace(/[()]/g, ''),
          title + ', Istanbul',
          title + ' (Istanbul)',
        ]

        for (const searchTitle of searchVariants) {
          const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTitle)}`
          )

          if (response.ok) {
            const json = await response.json()
            if (json.type !== 'disambiguation') {
              setData({
                title: json.title,
                description: json.description || '',
                extract: json.extract || '',
                thumbnail: json.thumbnail?.source,
                url: json.content_urls?.desktop?.page || '',
              })
              setLoading(false)
              return
            }
          }
        }

        // No article found
        setData(null)
      } catch {
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchWiki()
  }, [title])

  return { data, loading }
}
