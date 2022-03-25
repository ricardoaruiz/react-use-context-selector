import React from 'react'

import { useContextSelector } from 'use-context-selector'
import { CounterContext } from './contexts/Counter'

import { CounterOne, CounterTwo } from './components'

import * as S from './App.styles'

export const App: React.FC = () => {
  const counterOne = useContextSelector(
    CounterContext,
    (state) => state.counterOne
  )
  const counterTwo = useContextSelector(
    CounterContext,
    (state) => state.counterTwo
  )

  return (
    <>
      <S.Container>
        <S.Header>
          <S.Title>Counters</S.Title>
          <S.Total>Total counters is: {counterOne + counterTwo}</S.Total>
        </S.Header>

        <CounterOne />
        <CounterTwo />
      </S.Container>
    </>
  )
}

export default App
