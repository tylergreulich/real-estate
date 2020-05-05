import React from 'react'
import {
  RegisterButton,
  StyledHeader,
  StyledLink,
  StyledNavigation
} from './Header.styles'

export const Header = () => {
  return (
    <StyledHeader>
      <div>Logo</div>
      <StyledNavigation>
        <StyledLink to="/">About Us</StyledLink>
        <StyledLink to="/">Login</StyledLink>
        <RegisterButton to="/">Register</RegisterButton>
      </StyledNavigation>
    </StyledHeader>
  )
}
