import * as types from './types'
import { getPageProperty } from 'notion-utils'



export function getPagePublishedDate(
  block: types.Block,
  recordMap: types.ExtendedRecordMap
): Date | null {
  const publishedDate = getPageProperty<number>('Published', block, recordMap)
  return publishedDate ? new Date(publishedDate) : null
}