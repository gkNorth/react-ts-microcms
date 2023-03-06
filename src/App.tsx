import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from 'components/pages/About';
import { Contact } from 'components/pages/Contact';
import { Header } from 'components/common/Header';
import { Footer } from 'components/common/Footer';
import { BackToPrevious } from 'components/parts/BackToPrevious'
import { List } from 'components/pages/List';
import { Post } from 'components/pages/Post';
import { NotFound } from 'components/pages/NotFound';
import { useAtom } from "jotai";
import { articleList } from "components/Atom"

export const App: FC = () => {
  useAtom(articleList)
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/about`} element={<About />} />
          <Route path={`/contact`} element={<Contact />} />
          <Route path={`/:postId`} element={<Post />} />
          <Route path={`/`} element={<List />} />
          <Route element={<NotFound />} />
        </Routes>
        <BackToPrevious />
        <Footer />
      </BrowserRouter>
    </div>
  );
}