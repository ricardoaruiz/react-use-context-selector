import React from 'react'

import { CounterOneProps } from './types'

import * as S from './styles'

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
