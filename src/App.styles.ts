import styled from 'styled-components'
import { Wrapper as CounterOne } from './components/CounterOne/styles'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${CounterOne} {
    margin-bottom: 20px;
  }
`

export const Header = styled.div`
  text-align: center;
  background-color: #7d8b91;
  border-radius: 5px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  align-self: stretch;
  margin-bottom: 20px;
  padding: 2rem;
`

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
`

export const Total = styled.h2`
  font-size: 3rem;
`
