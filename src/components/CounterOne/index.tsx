import React from 'react'

import { CounterOneProps } from './types'

export const CounterOne: React.VFC<CounterOneProps> = ({
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
      <h1>Counter One</h1>

      <button type="button" onClick={handleDecrementButtonClick}>
        Decrement Counter One
      </button>
      <p>Counter one: {counter}</p>
      <button type="button" onClick={handleIncrementButtonClick}>
        Increment Counter One
      </button>
    </>
  )
}
