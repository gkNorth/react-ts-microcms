import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BackToPrevious } from 'components/parts/BackToPrevious';
import '@testing-library/jest-dom'

describe('BackToPrevious', () => {
  it('isListPageがtrueの場合nullを返す（Listページでは出さない）', () => {
    const mockLocation = { pathname: '/' }
    const { container } = render(
      <MemoryRouter initialEntries={[mockLocation]}>
        <BackToPrevious />
      </MemoryRouter>
    )
    expect(container.firstChild).toBeNull()
  })

  it('isListPageがfalseの場合BackToPreviousを返す', () => {
    const mockLocation = { pathname: '/page1' }
    const { getByText } = render(
      <MemoryRouter initialEntries={[mockLocation]}>
        <BackToPrevious />
      </MemoryRouter>
    )
    expect(getByText('Back to Previous page')).toBeInTheDocument()
  })
})
