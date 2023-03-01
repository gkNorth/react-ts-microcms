import { useParams } from 'react-router-dom';
import { useAtom } from "jotai";
import { articleList } from "./Atom"

export const Post = () => {
  const params = useParams();
  const [ allContents ] = useAtom(articleList)
  const list = allContents.contents

  const filteredPost = list.find((post:any) => post.id == params.postId)

  return (
    <div className="App">
      <h2>{filteredPost.blogTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: filteredPost.blogBody }}>
        {/* {filteredPost.content} */}
      </div>
    </div>
  );
}