import React from 'react'
import { renderWithContext, screen } from './utils/test'

import App from './App'
import userEvent from '@testing-library/user-event'

describe('<App />', () => {
  it('should be render correctly', () => {
    renderWithContext(<App />)
    expect(
      screen.getByRole('heading', { name: /counters$/i })
    ).toBeInTheDocument()
  })

  it('shoud be start total counter is zero', () => {
    renderWithContext(<App />)

    const totalCounter = screen.getByText(/total counters is: 0/i)
    expect(totalCounter).toBeInTheDocument()

    const totalCounterOne = screen.getByText(/counter one: 0/i)
    expect(totalCounterOne).toBeInTheDocument()

    const totalCounterTwo = screen.getByText(/counter two: 0/i)
    expect(totalCounterTwo).toBeInTheDocument()
  })

  it('should be update total counters when counter one is incremented', () => {
    renderWithContext(<App />)

    const totalCounter = screen.getByText(/total counters is: 0/i)
    expect(totalCounter).toBeInTheDocument()

    const totalCounterOne = screen.getByText(/counter one: 0/i)
    expect(totalCounterOne).toBeInTheDocument()

    const incrementButtonOne = screen.getByRole('button', {
      name: /increment counter one/i,
    })
    userEvent.click(incrementButtonOne)
    expect(totalCounterOne).toHaveTextContent('1')
    expect(totalCounter).toHaveTextContent('1')
  })

  it('should be update total counters when counter one is decremented', () => {
    renderWithContext(<App />)

    const totalCounter = screen.getByText(/total counters is: 0/i)
    expect(totalCounter).toBeInTheDocument()

    const totalCounterOne = screen.getByText(/counter one: 0/i)
    expect(totalCounterOne).toBeInTheDocument()

    // Increment
    const incrementButtonOne = screen.getByRole('button', {
      name: /increment counter one/i,
    })
    userEvent.click(incrementButtonOne)
    expect(totalCounterOne).toHaveTextContent('1')
    expect(totalCounter).toHaveTextContent('1')

    // Decrement
    const decrementButtonOne = screen.getByRole('button', {
      name: /decrement counter one/i,
    })
    userEvent.click(decrementButtonOne)
    expect(totalCounterOne).toHaveTextContent('0')
    expect(totalCounter).toHaveTextContent('0')
  })

  it('should be update total counters when counter two is incremented', () => {
    renderWithContext(<App />)

    const totalCounter = screen.getByText(/total counters is: 0/i)
    expect(totalCounter).toBeInTheDocument()

    const totalCounterTwo = screen.getByText(/counter two: 0/i)
    expect(totalCounterTwo).toBeInTheDocument()

    const incrementButtonTwo = screen.getByRole('button', {
      name: /increment counter two/i,
    })
    userEvent.click(incrementButtonTwo)
    expect(totalCounterTwo).toHaveTextContent('1')
    expect(totalCounter).toHaveTextContent('1')
  })

  it('should be update total counters when counter two is decremented', () => {
    renderWithContext(<App />)

    const totalCounter = screen.getByText(/total counters is: 0/i)
    expect(totalCounter).toBeInTheDocument()

    const totalCounterTwo = screen.getByText(/counter two: 0/i)
    expect(totalCounterTwo).toBeInTheDocument()

    // Increment
    const incrementButtonTwo = screen.getByRole('button', {
      name: /increment counter two/i,
    })
    userEvent.click(incrementButtonTwo)
    expect(totalCounterTwo).toHaveTextContent('1')
    expect(totalCounter).toHaveTextContent('1')

    // Decrement
    const decrementButtonTwo = screen.getByRole('button', {
      name: /decrement counter two/i,
    })
    userEvent.click(decrementButtonTwo)
    expect(totalCounterTwo).toHaveTextContent('0')
    expect(totalCounter).toHaveTextContent('0')
  })

  it('should be update total counters when counter one and counter two is changed', () => {
    renderWithContext(<App />)

    const totalCounter = screen.getByText(/total counters is: 0/i)
    expect(totalCounter).toBeInTheDocument()

    // Counter one
    const totalCounterOne = screen.getByText(/counter one: 0/i)
    expect(totalCounterOne).toBeInTheDocument()

    const incrementButtonOne = screen.getByRole('button', {
      name: /increment counter one/i,
    })
    userEvent.click(incrementButtonOne)
    expect(totalCounterOne).toHaveTextContent('1')
    expect(totalCounter).toHaveTextContent('1')

    // Counter two
    const totalCounterTwo = screen.getByText(/counter two: 0/i)
    expect(totalCounterTwo).toBeInTheDocument()

    const incrementButtonTwo = screen.getByRole('button', {
      name: /increment counter two/i,
    })
    userEvent.click(incrementButtonTwo)
    expect(totalCounterTwo).toHaveTextContent('1')
    expect(totalCounter).toHaveTextContent('2')
  })
})
