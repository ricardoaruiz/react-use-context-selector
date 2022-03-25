import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CounterOne } from '.'
import { CounterOneProps } from './types'

const mockedOnIncrement = jest.fn()
const mockedOnDecrement = jest.fn()
const actions: CounterOneProps = {
  onIncrement: mockedOnIncrement,
  onDecrement: mockedOnDecrement,
}

describe('<CounterOne />', () => {
  beforeEach(() => {
    mockedOnIncrement.mockClear()
    mockedOnDecrement.mockClear()
  })

  it('should be render successfuly', () => {
    render(<CounterOne {...actions} />)

    expect(screen.getByRole('heading', { name: /counter one/i }))

    expect(
      screen.getByRole('button', { name: /decrement counter one/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/counter one: 0/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /increment counter one/i })
    ).toBeInTheDocument()
  })

  it('should be increment counter when increment button is clicked', () => {
    render(<CounterOne {...actions} />)

    const counter = screen.getByText(/counter one: /i, { exact: false })
    expect(counter).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: /increment counter one/i,
    })

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('1')
    expect(mockedOnIncrement).toHaveBeenCalledTimes(1)
    mockedOnIncrement.mockClear()

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('2')
    expect(mockedOnIncrement).toHaveBeenCalledTimes(1)
    mockedOnIncrement.mockClear()
  })

  it('should be decrement counter when decrement button is clicked', () => {
    render(<CounterOne {...actions} />)

    const counter = screen.getByText(/counter one: /i, { exact: false })
    expect(counter).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: /increment counter one/i,
    })

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('1')
    expect(mockedOnIncrement).toHaveBeenCalledTimes(1)
    mockedOnIncrement.mockClear()

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('2')
    expect(mockedOnIncrement).toHaveBeenCalledTimes(1)
    mockedOnIncrement.mockClear()

    const decrementButton = screen.getByRole('button', {
      name: /decrement counter one/i,
    })

    expect(decrementButton).toBeInTheDocument()
    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('1')
    expect(mockedOnDecrement).toHaveBeenCalledTimes(1)
    mockedOnDecrement.mockClear()

    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('0')
    expect(mockedOnDecrement).toHaveBeenCalledTimes(1)
    mockedOnDecrement.mockClear()
  })

  it('should not be decrement counter less than zero when decrement button is clicked', () => {
    render(<CounterOne {...actions} />)

    const counter = screen.getByText(/counter one: /i, { exact: false })
    expect(counter).toBeInTheDocument()
    expect(counter).toHaveTextContent('0')

    const decrementButton = screen.getByRole('button', {
      name: /decrement counter one/i,
    })
    expect(decrementButton).toBeInTheDocument()
    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('0')
    expect(mockedOnDecrement).not.toHaveBeenCalled()
    mockedOnDecrement.mockClear()

    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('0')
    expect(mockedOnDecrement).not.toHaveBeenCalled()
    mockedOnDecrement.mockClear()
  })
})
