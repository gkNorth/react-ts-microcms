import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from 'components/common/Header'

describe('Header', () => {

  test('isListPageがtrueの場合、divタグを出す', () => {
    const mockLocation = { pathname: '/' }
    render(
      <MemoryRouter initialEntries={[mockLocation]}>
        <Header />
      </MemoryRouter>
    )
    const titleEl = screen.getByText('MINIMAL BLOG').tagName
    expect(titleEl).toBe('DIV')
  })

  test('isListPageがfalseの場合、aタグを出す', () => {
    const mockLocation = { pathname: '/page' }
    render(
      <MemoryRouter initialEntries={[mockLocation]}>
        <Header />
      </MemoryRouter>
    )
    const titleEl = screen.getByText('MINIMAL BLOG').tagName
    expect(titleEl).toBe('A')
  })

})