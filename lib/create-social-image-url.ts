import { createOgImage } from './create-og-image'


export function createSocialImageUrl(
  domain: string, publishedDate: Date, tags: string[], title: string, twitter: string) {
  const metadata = createImageMetadata(domain, publishedDate, tags)
  return createOgImage({ title, meta: metadata , twitter: twitter})
}

export function createImageMetadata(domain: string, publishedDate: Date, tags: string[]) {
  const metadataTerms = []
  if (domain) {
    metadataTerms.push(domain)
  }
  if (publishedDate) {
    metadataTerms.push(publishedDate.toLocaleString("en-US", { "dateStyle": "medium" }))
  }
  if (tags) {
    // TODO: limit the number of hashtags to display in order to fit in the available line length.
    tags = tags.map(x => sanitizeHashtag(x))
    metadataTerms.push(...tags)
  }

  const metadata = metadataTerms.join(" · ")
  return metadata
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
