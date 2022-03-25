import React from 'react'

import { useContextSelector } from 'use-context-selector'
import { CounterContext } from '../../contexts/Counter'

import * as S from './styles'

const CounterTwo: React.VFC = () => {
  const counter = useContextSelector(
    CounterContext,
    (state) => state.counterTwo
  )

  const incrementCounterTwo = useContextSelector(
    CounterContext,
    (state) => state.incrementCounterTwo
  )

  const decrementCounterTwo = useContextSelector(
    CounterContext,
    (state) => state.decrementCounterTwo
  )

  const handleIncrementButtonClick = React.useCallback(() => {
    incrementCounterTwo()
  }, [incrementCounterTwo])

  const handleDecrementButtonClick = React.useCallback(() => {
    if (counter > 0) {
      decrementCounterTwo()
    }
  }, [counter, decrementCounterTwo])

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
