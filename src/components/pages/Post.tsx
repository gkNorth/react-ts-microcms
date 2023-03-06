import { useParams } from 'react-router-dom';
import { useAtom } from "jotai";
import { articleList } from "components/Atom"
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Blog } from 'types';
import { NotFound } from 'components/pages/NotFound';


export const Post = () => {
  const params = useParams();
  const [ allContents ] = useAtom(articleList)
  const list: Blog[] = allContents.contents

  const filteredPost: Blog | undefined  = list.find((post:any) => post.id === params.postId)
  if (!filteredPost) {return <NotFound />}

  const imgSrc: string | null = filteredPost.blogEyecatch ? filteredPost.blogEyecatch.url : null
  const publisedAt = dayjs(filteredPost.publishedAt).format('YYYY-MM-DD')

  return (
    <PostWrapper className="post">
      {imgSrc && (
        <CardImgWrapper>
          <CardImg src={imgSrc} alt="xxx" />
        </CardImgWrapper>
      )}
      <CardTitle>{filteredPost.blogTitle}</CardTitle>
      <CardInfo>By <CardAuthor>{filteredPost.blogAuthor.nickname}</CardAuthor>, Published on {publisedAt}</CardInfo>
      <div dangerouslySetInnerHTML={{ __html: filteredPost.blogBody }}>
        {/* {filteredPost.content} */}
      </div>
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  padding: 20px;
`
const CardImgWrapper = styled.div`
  padding-bottom: 20px;
  text-align: center;
  width: 100%;
`
const CardImg = styled.img`
  max-height: 300px;
  max-width: 90vw;
  object-fit: contain;
`
const CardTitle = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 15px;
`
const CardInfo = styled.div`
  font-size: 0.9rem;
  padding-bottom: 30px;
`
const CardAuthor = styled.span`
  font-weight: bold;
`