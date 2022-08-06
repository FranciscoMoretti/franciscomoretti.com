import { Block, ExtendedRecordMap } from 'notion-types'
import { getBlockTitle } from 'notion-utils'
import { getPagePublishedDate } from './get-page-published-date'
import { getPageTags } from './get-page-tags'
import { getSocialImageUrl } from './get-social-image-url'


export function getPageSocialImageUrl(block: Block, recordMap: ExtendedRecordMap, domain: string) {
  return getSocialImageUrl(
        domain,
        getPagePublishedDate(block, recordMap),
        getPageTags(block, recordMap),
        getBlockTitle(block, recordMap)
      )
}

