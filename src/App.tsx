import React from 'react'

import { CounterContextProvider } from './contexts/Counter'
import { CounterOne, CounterTwo } from './components'

import * as S from './App.styles'

export const App: React.FC = () => {
  const [total, setTotal] = React.useState(0)

  const incrementTotal = React.useCallback(() => {
    setTotal((state) => state + 1)
  }, [])

  const decrementTotal = React.useCallback(() => {
    setTotal((state) => state - 1)
  }, [])

  return (
    <CounterContextProvider>
      <S.Container>
        <S.Header>
          <S.Title>Counters</S.Title>
          <S.Total>Total counters is: {total}</S.Total>
        </S.Header>

        <CounterOne onIncrement={incrementTotal} onDecrement={decrementTotal} />
        <CounterTwo onIncrement={incrementTotal} onDecrement={decrementTotal} />
      </S.Container>
    </CounterContextProvider>
  )
}

export default App
