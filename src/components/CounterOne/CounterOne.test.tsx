import React from 'react'
import { renderWithContext, screen } from '../../utils/test'
import userEvent from '@testing-library/user-event'

import { CounterOne } from '.'

describe('<CounterOne/>', () => {
  it('should be render successfuly', () => {
    renderWithContext(<CounterOne />)

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
    renderWithContext(<CounterOne />)

    const counter = screen.getByText(/counter one: /i, { exact: false })
    expect(counter).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: /increment counter one/i,
    })

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('1')

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('2')
  })

  it('should be decrement counter when decrement button is clicked', () => {
    renderWithContext(<CounterOne />)

    const counter = screen.getByText(/counter one: /i, { exact: false })
    expect(counter).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: /increment counter one/i,
    })

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('1')

    userEvent.click(incrementButton)
    expect(counter).toHaveTextContent('2')

    const decrementButton = screen.getByRole('button', {
      name: /decrement counter one/i,
    })

    expect(decrementButton).toBeInTheDocument()
    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('1')

    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('0')
  })

  it('should not be decrement counter less than zero when decrement button is clicked', () => {
    renderWithContext(<CounterOne />)

    const counter = screen.getByText(/counter one: /i, { exact: false })
    expect(counter).toBeInTheDocument()
    expect(counter).toHaveTextContent('0')

    const decrementButton = screen.getByRole('button', {
      name: /decrement counter one/i,
    })
    expect(decrementButton).toBeInTheDocument()
    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('0')

    userEvent.click(decrementButton)
    expect(counter).toHaveTextContent('0')
  })
})
