import { useEffect, useRef } from 'react'

export default function useKeyboard() {
  const keyMap = useRef<Record<string, boolean>>({})

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    const onDocumentKey = (e: KeyboardEvent) => {
      keyMap.current[e.code] = e.type === 'keydown'
    }

    document.addEventListener('keydown', onDocumentKey)
    document.addEventListener('keyup', onDocumentKey)

    return () => {
      document.removeEventListener('keydown', onDocumentKey)
      document.removeEventListener('keyup', onDocumentKey)
    }
  }, [])

  return keyMap.current
}