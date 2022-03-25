import React from 'react'

import { CounterTwoProps } from './types'

import * as S from './styles'

const CounterTwo: React.VFC<CounterTwoProps> = ({
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
    <S.Wrapper>
      <S.Title>Counter Two</S.Title>

      <S.Content>
        <S.Button type="button" onClick={handleDecrementButtonClick}>
          Decrement Counter Two
        </S.Button>
        <S.Counter>Counter two: {counter}</S.Counter>
        <S.Button type="button" onClick={handleIncrementButtonClick}>
          Increment Counter Two
        </S.Button>
      </S.Content>
    </S.Wrapper>
  )
}

const MemoizedCounterTwo = React.memo(CounterTwo)
export { MemoizedCounterTwo as CounterTwo }
