import { atom } from 'jotai'

export const currentPageAtom = atom(0)

export const articleList = atom(async () => {
  const response = await fetch(
    `https://${process.env.REACT_APP_API_URL}/api/v1/blog/?limit=99999`,
    {
      headers: { 'X-MICROCMS-API-KEY': `${process.env.REACT_APP_API_KEY}` },
    }
  )
  return await response.json()
})