import {
  parsePageId
} from 'notion-utils'

import { notion } from 'lib/notion-api'
import * as config from 'lib/config'
import { NextApiRequest, NextApiResponse } from 'next'
import { createPageSocialImageUrl } from 'lib/create-page-social-image-url'

/**
 * Social image generation via https://cloudinary.com/.
 */

const cacheControl = 'max-age 3600, must-revalidate'
const type= 'png'

function stringifyObjectProps(object: object) {
  return JSON.parse(
    JSON.stringify(object, (key, value) => (value && typeof value === 'object' ? value : `${value}`)),
  )
}

async function getArrayBuffer(url) {
  const response = await fetch(url);
  return response.arrayBuffer();
}

export default async function withOGImage(request: NextApiRequest, response: NextApiResponse) {
  const params = stringifyObjectProps(request.query)

  const pageId = parsePageId(params.id)

  if (!pageId) {
    throw new Error('Invalid notion page id')
  }

  const recordMap = await notion.getPage(pageId)

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  if (!block) {
    throw new Error('Invalid recordMap for page')
  }

  let imageUrl = createPageSocialImageUrl(block, recordMap, config.domain)
    
  const imageArrayBuffer = await getArrayBuffer(imageUrl);
  const buffer = Buffer.from(imageArrayBuffer)

  response.setHeader(
    'Content-Type',
    type ? `image/${type}` : 'image/png',
  )
  response.setHeader('Cache-Control', cacheControl)
  response.write(buffer)
  response.end()
}
