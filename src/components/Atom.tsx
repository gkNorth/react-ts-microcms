import { atom } from 'jotai'

export const countAtom = atom(0)
export const nameAtom = atom('これで良いのかな？')

export const articleList = atom(async () => {
  const response = await fetch(
    'https://corporatesite-microcms.microcms.io/api/v1/blog/?limit=99999',
    {
      headers: { 'X-MICROCMS-API-KEY': '26b6dc3defc54044b0a2f559a87f4f0200df' },
    }
  )
  return await response.json()
})