// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Contact } from './components/Contact';
import { List } from './components/List';
import { Post } from './components/Post';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/:postId`} element={<Post />} />
        <Route path={`/`} element={<List />}>
        </Route>
      </Routes>
      <div>
        <Link to='/'>Back To Top</Link>
      </div>
    </BrowserRouter>
  );
}