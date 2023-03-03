import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAtom } from "jotai";
import { articleList } from "components/Atom"
import { GetQueryParameters } from 'libs/GetQueryParameters'

export const Pagination = () => {

  const [ allContents ] = useAtom(articleList)
  const { totalCount } = allContents
  const limit = 10
  const pagesCount = Math.ceil(totalCount / limit)

  const location = useLocation();
  const paramByList: number = location.search ? Number(GetQueryParameters('list',location.search)) : 0
  const beforeOffset = paramByList > 0 ? paramByList : null
  const afterOffset = paramByList + 10 < totalCount ? paramByList : null

  return (
    <PaginationWrapper>
      {
        beforeOffset !== null && (
          <PrevStringLink to={`/?list=${beforeOffset-10}`}>
            <PrevStyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
              <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </PrevStyledSVG>
            Prev
          </PrevStringLink>
        )
      }
      {[...Array(pagesCount)].map( (_,i) => (
        <NumberLink to={i === 0 ? "/" : `/?list=${i*10}`} key={i+1}>{i+1}</NumberLink>
      ))}
      {
        afterOffset !== null && (
          <StringLink to={`/?list=${afterOffset+10}`}>Next
            <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
              <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </StyledSVG>
          </StringLink>
        )
      }
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`
const NumberLink = styled(Link)`
  background: #4f55c1;
  border-radius: 3px;
  display: inline-block;
  color: #fff;
  padding: 10px;
  margin-right: 8px;
  text-decoration: none;
`
const StringLink = styled(Link)`
  align-items: center;
  color: #333;
  display: flex;
  margin-left: 8px;
  &:hover {
    text-decoration: none;
  }
`
const StyledSVG = styled.svg`
  margin-left: 5px;
  width: 15px;
`
const PrevStringLink = styled(StringLink)`
  margin: 0 12px 0 0;
`
const PrevStyledSVG = styled.svg`
  margin-right: 5px;
  transform: scale(-1, 1);
  width: 15px;
`