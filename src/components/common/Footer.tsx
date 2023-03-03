import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      ©️Development Blog
    </StyledFooter>
  )
}

const StyledFooter = styled.nav`
  background: #4f55c1;
  color: #fff;
  font-size: 0.9rem;
  padding: 16px 0;
  text-align: center;
`