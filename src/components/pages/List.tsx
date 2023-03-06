import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';
import { useAtom } from "jotai";
import { articleList } from "components/Atom"
import dayjs from 'dayjs';
import { Pagination } from 'components/parts/Pagination';
import { GetQueryParameters } from 'libs/GetQueryParameters'
import { Blog } from 'types'

export const List = () => {
  const [ allContents ] = useAtom(articleList)
  const [ list, setList ] = useState<Blog[]>(allContents.contents)

  const location = useLocation();
  useEffect(() => {
    const offset: number = location.search ? Number(GetQueryParameters('list',location.search)) : 0
    setList(allContents.contents.slice(offset, offset + 10))
    window.scrollTo(0, 0)
  }, [location.search, allContents.contents]);

  if (!list) return null;

  return (
    <CardListWrapper className="list">
      <CardList>
        {list.map((post: Blog) => {
          const imgSrc: string = post.blogEyecatch ? post.blogEyecatch.url : `${process.env.PUBLIC_URL}/noimage.jpg`
          const publisedAt: string = dayjs(post.publishedAt).format('YYYY-MM-DD')
          return (
            <Card key={post.id}>
              <CardLink to={`/${post.id}`}>
                <CardImg src={imgSrc} />
                <CardTextWrapper>
                  <CardCategory>{post.blogCategory.blogCategoryName}</CardCategory>
                  <CardTitle>{post.blogTitle}</CardTitle>
                  <CardInfo>By <CardAuthor>{post.blogAuthor.nickname}</CardAuthor>, Published on {publisedAt}</CardInfo>
                </CardTextWrapper>
              </CardLink>
            </Card>
          )
        })}
      </CardList>
      <Pagination />
    </CardListWrapper>
  );
}

const CardListWrapper = styled.div`
  background: #f9f9f9;
`
const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 570px) {
    display: block;
  }
`
const Card = styled.li`
  background: #fff;
  border-radius: 2px;
  box-shadow: 1px 1px 3px #eee;
  margin: 5px 0;
  width: calc(50% - 10px);
  @media (max-width: 570px) {
    margin: 5px auto;
    width: calc(100% - 10px);
  }
`
const CardLink = styled(Link)`
  color: #333;
  display: block;
  text-decoration: none;
`
const CardTextWrapper = styled.div`
  padding: 10px;
`
const CardImg = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
`
const CardCategory = styled.p`
  color: #1d4ed8;
  font-size: 0.9rem;
  padding-bottom: 8px;
`
const CardTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  padding-bottom: 15px;
`
const CardInfo = styled.p`
  font-size: 0.7rem;
`
const CardAuthor = styled.span`
  font-weight: bold;
`