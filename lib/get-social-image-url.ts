import { createOgImage } from './create-og-image'


export function getSocialImageUrl(domain: string, publishedDate: Date, tags: string[], title: string) {
  const metadata = []
  if (domain) {
    metadata.push(domain)
  }
  if (publishedDate) {
    metadata.push(publishedDate.toLocaleString("en-US", { "dateStyle": "medium" }))
  }
  if (tags) {
    // TODO: limit the number of hashtags to display in order to fit in the available line length.
    tags = tags.map(x => sanitizeHashtag(x))
    metadata.push(...tags)
  }

  const metadataText = metadata.join(" · ")

  const socialImageUrl = createOgImage({ title, meta: metadataText })
  return socialImageUrl
}

function sanitizeHashtag(hashtag: string): string {
  if (!hashtag.startsWith("#")){
    hashtag = "#" + hashtag
  }
  if(hashtag.includes(" ")){
    hashtag  = hashtag.replace(/ /g, '')
  }
  if(hashtag.includes(".")){
    hashtag  = hashtag.replace(/\./g,' ')
  }
  return hashtag.toLowerCase()
}
