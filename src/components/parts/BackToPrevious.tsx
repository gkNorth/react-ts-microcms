import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

export const BackToPrevious = () => {

  const location = useLocation()
  const isListPage = location.pathname === '/'

  return isListPage ? null : (
    <StyledBackToTop  onClick={() => window.history.back()}>Back to Previous page</StyledBackToTop>
  )
}

const StyledBackToTop = styled.a`
  color: #333;
  cursor: pointer;
  display: inline-block;
  margin: 20px 10px;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`