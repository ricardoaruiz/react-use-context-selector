import React from 'react'

import { CounterTwoProps } from './types'

export const CounterTwo: React.VFC<CounterTwoProps> = ({
  onIncrement,
  onDecrement,
}) => {
  const [counter, setCounter] = React.useState(0)

  const handleIncrementButtonClick = React.useCallback(() => {
    setCounter((state) => state + 1)
    onIncrement()
  }, [onIncrement])

  const handleDecrementButtonClick = React.useCallback(() => {
    if (counter > 0) {
      onDecrement()
    }
    setCounter((state) => (state > 0 ? state - 1 : state))
  }, [counter, onDecrement])

  return (
    <>
      <h1>Counter Two</h1>

      <button type="button" onClick={handleDecrementButtonClick}>
        Decrement Counter Two
      </button>
      <p>Counter two: {counter}</p>
      <button type="button" onClick={handleIncrementButtonClick}>
        Increment Counter Two
      </button>
    </>
  )
}
