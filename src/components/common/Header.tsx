import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const blogTitle = 'MINIMAL BLOG'

  const location = useLocation()
  const isListPage = location.pathname === '/'

  return (
    <header>
      <Nav>
        {!isListPage && <DetailHeaderTitle to={`/`}>{blogTitle}</DetailHeaderTitle>}
        <Ul>
          <Li><HeaderLink to={`/about`}>About</HeaderLink></Li>
          <Li><HeaderLink to={`/contact`}>Contact</HeaderLink></Li>
        </Ul>
      </Nav>
      {isListPage && <ListHeaderTitle>{blogTitle}</ListHeaderTitle>}
    </header>
  )
}

const Nav = styled.nav`
  background: #4f55c1;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`
const Ul = styled.ul`
  display: flex;
  margin-left: auto;
`
const Li = styled.li`
  margin: 0 10px;
`
const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`
const DetailHeaderTitle = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 5px;
  text-decoration: none;
  &:hover {
    text-decoration: u;
  }
`
const ListHeaderTitle = styled.div`
  background: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 48px 0;
  text-align: center;
`