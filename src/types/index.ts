export type Blog = {
  blogAuthor: blogAuthor
  blogAuthorImg?: blogAuthorImg
  blogBody: string
  blogCategory: blogCategory
  blogEyecatch?: BlogEyecatch | null
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
  profile_img?: ProfileImg
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

type blogAuthorImg = {
  url: string
  height: number 
  width: number
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