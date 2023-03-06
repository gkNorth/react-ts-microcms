import styled from "styled-components";

export const Contact = () => {
  return (
    <PostWrapper className="about">
      <CardTitle>Contact</CardTitle>
      <div>
      North Detail はスマート＆テクノロジーを活用して、様々な分野へ新たな価値を提供いたします。
      </div>
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  padding: 20px;
`
const CardTitle = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 15px;
`