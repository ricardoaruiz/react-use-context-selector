import React from 'react'
import { createContext } from 'use-context-selector'
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
