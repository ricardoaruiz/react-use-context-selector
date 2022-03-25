import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should be render correctly', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /wellcome to React with webpack/i })
    ).toBeInTheDocument()
  })
})
