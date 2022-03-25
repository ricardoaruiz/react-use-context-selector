import React from 'react'

import { useCounter } from '../../contexts/Counter'

import * as S from './styles'

const CounterOne: React.VFC = () => {
  const {
    counterOne: counter,
    incrementCounterOne,
    decrementCounterOne,
  } = useCounter()

  const handleIncrementButtonClick = React.useCallback(() => {
    incrementCounterOne()
  }, [incrementCounterOne])

  const handleDecrementButtonClick = React.useCallback(() => {
    if (counter > 0) {
      decrementCounterOne()
    }
  }, [counter, decrementCounterOne])

  return (
    <S.Wrapper>
      <S.Title>Counter One</S.Title>

      <S.Content>
        <S.Button type="button" onClick={handleDecrementButtonClick}>
          Decrement Counter One
        </S.Button>
        <S.Counter>Counter one: {counter}</S.Counter>
        <S.Button type="button" onClick={handleIncrementButtonClick}>
          Increment Counter One
        </S.Button>
      </S.Content>
    </S.Wrapper>
  )
}

const MemoizedCounterOne = React.memo(CounterOne)
export { MemoizedCounterOne as CounterOne }
