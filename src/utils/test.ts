import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { CounterContextProvider } from '../contexts/Counter'

const renderWithContext = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  render(ui, { wrapper: CounterContextProvider, ...options })
}

export * from '@testing-library/react'

export { renderWithContext }
