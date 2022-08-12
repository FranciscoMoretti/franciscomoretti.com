import { Block, ExtendedRecordMap } from 'notion-types'
import { getBlockTitle } from 'notion-utils'
import { getPagePublishedDate } from './get-page-published-date'
import { getPageTags } from './get-page-tags'
import { createSocialImageUrl } from './create-social-image-url'


export function createPageSocialImageUrl(block: Block, recordMap: ExtendedRecordMap, domain: string, twitter: string) {
  return createSocialImageUrl(
        domain,
        getPagePublishedDate(block, recordMap),
        getPageTags(block, recordMap),
        getBlockTitle(block, recordMap),
        twitter
      )
}

