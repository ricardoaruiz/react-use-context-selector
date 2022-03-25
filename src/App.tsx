import React from 'react'

import { CounterOne, CounterTwo } from './components'

export const App: React.FC = () => {
  const [total, setTotal] = React.useState(0)

  const incrementTotal = React.useCallback(() => {
    setTotal((state) => state + 1)
  }, [])

  const decrementTotal = React.useCallback(() => {
    setTotal((state) => state - 1)
  }, [])

  return (
    <div>
      <h1>Counters</h1>
      <p>Total counters is: {total}</p>

      <CounterOne onIncrement={incrementTotal} onDecrement={decrementTotal} />
      <CounterTwo onIncrement={incrementTotal} onDecrement={decrementTotal} />
    </div>
  )
}

export default App
