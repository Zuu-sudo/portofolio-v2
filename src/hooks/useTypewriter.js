import { useState, useEffect } from 'react'

export function useTypewriter(words, speed = 90, pause = 1700) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!words.length) return
    const currentWord = words[index % words.length]
    let timeoutId

    if (displayed.length < currentWord.length) {
      timeoutId = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1))
      }, speed)
    } else {
      timeoutId = setTimeout(() => {
        setDisplayed('')
        setIndex((prev) => (prev + 1) % words.length)
      }, pause)
    }

    return () => clearTimeout(timeoutId)
  }, [displayed, index, pause, speed, words])

  return displayed
}