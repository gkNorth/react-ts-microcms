export const GetQueryParameters = (name: string, url: string) => {
  if (!url) url = window.location.href
  name = name.replace(/[[\]]/g, "$&")
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}