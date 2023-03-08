import { GetQueryParameters } from 'libs/GetQueryParameters'

describe('GetQueryParameters', () => {
  
  test('クエリパラメータにlistがある場合は値を返す', () => {
    const queryParam = GetQueryParameters('list', 'https://localhost:3000/?list=10')
    expect(queryParam).toBe('10')
  })
  
  test('クエリパラメータにlistがない場合はnullを返す', () => {
    const queryParam = GetQueryParameters('list', 'https://localhost:3000/?test=10')
    expect(queryParam).toBeNull()
  })

  test('クエリパラメータがない場合はnullを返す', () => {
    const queryParam = GetQueryParameters('list', 'https://localhost:3000/')
    expect(queryParam).toBeNull()
  })

})