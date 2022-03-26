import React from 'react'
import { createContext, useContextSelector } from 'use-context-selector'
import { CounterContextValues } from './types'

export const CounterContext = createContext({} as CounterContextValues)

export const CounterContextProvider: React.FC = ({ children }) => {
  const [counterOne, setCounterOne] = React.useState<number>(0)
  const [counterTwo, setCounterTwo] = React.useState<number>(0)

  const incrementCounterOne = React.useCallback(() => {
    setCounterOne((state) => state + 1)
  }, [])

  const decrementCounterOne = React.useCallback(() => {
    setCounterOne((state) => state - 1)
  }, [])

  const incrementCounterTwo = React.useCallback(() => {
    setCounterTwo((state) => state + 1)
  }, [])

  const decrementCounterTwo = React.useCallback(() => {
    setCounterTwo((state) => state - 1)
  }, [])

  const values: CounterContextValues = {
    counterOne,
    incrementCounterOne,
    decrementCounterOne,
    counterTwo,
    incrementCounterTwo,
    decrementCounterTwo,
  }

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  )
}

export const useCounterOne = () => {
  const counterOne = useContextSelector(
    CounterContext,
    (counters) => counters.counterOne
  )
  const incrementCounterOne = useContextSelector(
    CounterContext,
    (counters) => counters.incrementCounterOne
  )
  const decrementCounterOne = useContextSelector(
    CounterContext,
    (counters) => counters.decrementCounterOne
  )

  return {
    counterOne,
    incrementCounterOne,
    decrementCounterOne,
  }
}

export const useCounterTwo = () => {
  const counterTwo = useContextSelector(
    CounterContext,
    (counters) => counters.counterTwo
  )
  const incrementCounterTwo = useContextSelector(
    CounterContext,
    (counters) => counters.incrementCounterTwo
  )
  const decrementCounterTwo = useContextSelector(
    CounterContext,
    (counters) => counters.decrementCounterTwo
  )

  return {
    counterTwo,
    incrementCounterTwo,
    decrementCounterTwo,
  }
}
