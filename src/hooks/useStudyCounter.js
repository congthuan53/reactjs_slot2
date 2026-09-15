import { useState } from 'react'

function useStudyCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increase = () => setCount((currentCount) => currentCount + 1)
  const decrease = () => setCount((currentCount) => Math.max(0, currentCount - 1))
  const reset = () => setCount(initialValue)

  return { count, increase, decrease, reset }
}

export default useStudyCounter
