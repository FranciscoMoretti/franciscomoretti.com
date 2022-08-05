import * as types from './types'
import { getPageProperty } from 'notion-utils'



export function getPageTags(
  block: types.Block,
  recordMap: types.ExtendedRecordMap
): string[] {
  return getPageProperty<string[]>('Tags', block, recordMap)
}