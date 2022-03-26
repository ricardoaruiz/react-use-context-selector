import React from 'react'

import { useCounterOne, useCounterTwo } from './contexts/Counter'

import { CounterOne, CounterTwo } from './components'

import * as S from './App.styles'

export const App: React.FC = () => {
  const { counterOne } = useCounterOne()
  const { counterTwo } = useCounterTwo()

  return (
    <S.Container>
      <S.Header>
        <S.Title>Counters</S.Title>
        <S.Total>Total counters is: {counterOne + counterTwo}</S.Total>
      </S.Header>

      <CounterOne />
      <CounterTwo />
    </S.Container>
  )
}

export default App
