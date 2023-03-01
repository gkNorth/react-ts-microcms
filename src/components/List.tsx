import { Link } from 'react-router-dom';
import { useAtom } from "jotai";
import { articleList } from "./Atom"

export const List = () => {
  const [ allContents ] = useAtom(articleList)
  const list = allContents.contents

  if (!list) return null;

  return (
    <div className="App">
      {list.map((p: any) => {
        return (
          <p key={p.id}>
            <Link to={`/${p.id}`}>{p.blogTitle}</Link>
          </p>
        )
      })}
    </div>
  );
}