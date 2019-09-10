import { useState } from 'react'

export default function useOverlay() {

  const [isOverlayDisplaying, setIsOverlayDisplaying] = useState(false)

  const toggle = function() {
    setIsOverlayDisplaying(!isOverlayDisplaying)
  }

  return {
    isOverlayDisplaying,
    toggle
  }
  
}