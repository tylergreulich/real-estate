import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.main.primary};
  color: ${({ theme }) => theme.main.white};
  padding: 25px 70px;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div``

export const StyledNavigation = styled.nav``

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.main.white};
  transition: color 0.25s ease-in-out;
  text-decoration: none;
  padding: 7px 20px;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.1rem;

  &:hover {
    color: ${({ theme }) => theme.main.secondary};
  }
`

export const RegisterButton = styled(StyledLink)`
  background-color: ${({ theme }) => theme.main.secondary};
  color: ${({ theme }) => theme.main.primary};
  padding: 7px 25px;
  border-radius: 5px;
  text-align: center;
  margin-left: 20px;
  transition: all 0.25s ease-in-out;
  border: 3px solid transparent;

  &:hover {
    background-color: ${({ theme }) => theme.main.primary};
    color: ${({ theme }) => theme.main.secondary};
    border: ${({ theme }) => `3px solid ${theme.main.secondary}`};
  }
`
