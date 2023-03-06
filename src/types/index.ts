export type Blog = {
  blogAuthor: blogAuthor
  blogBody: string
  blogCategory: blogCategory
  blogEyecatch: BlogEyecatch | null
  blogTitle: string
  createdAt: string
  id: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

type blogAuthor = {
  author: string
  createdAt: string
  id: string
  nickname: string
  profile: string
  profile_img: ProfileImg
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

type ProfileImg = {
  url: string
  height: number
  width: number
}

type blogCategory = {
  blogCategoryName: string
  blogContentsId: string
  createdAt: string
  id: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

type BlogEyecatch = {
  height: number
  url: string
  width: number
}