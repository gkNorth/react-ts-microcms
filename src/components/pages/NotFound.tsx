import { FC } from 'react'
import styled from 'styled-components'

export const NotFound: FC = () => {
  return(
    <PostWrapper>
      <CardTitle>404</CardTitle>
      <p>Sorry, the page you're looking con not found.</p>
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  padding: 20px;
`
const CardTitle = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 15px;
`