import Head from 'next/head'
import * as React from 'react'

import * as types from 'lib/types'
import * as config from 'lib/config'
import { createOgImage } from 'lib/create-og-image'

export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  // const socialImageUrl = createOgImage({title, meta: "Francisco Moretti"})
  const socialImageUrl = "https://res.cloudinary.com/delba/image/upload/w_1600,h_836,q_100/l_text:Karla_72_bold:(WIP)%2520Automatically%2520Generate%2520Branded%2520Open%2520Graph%2520(OG)%2520Images%2520for%2520Your%2520Blog%2520Posts,co_rgb:ffe4e6,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_100,y_180/l_text:Karla_48:delba.dev%2520%25C2%25B7%2520Jul%25205,co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_100/l_twitter_name:delba_oliveira/c_thumb,g_face,r_max,w_380,h_380,q_100/fl_layer_apply,w_140,g_north_west,x_100,y_100/grain-gradient.png"

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
          <meta property='twitter:domain' content={site.domain} />
        </>
      )}

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {socialImageUrl ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={socialImageUrl} />
          <meta property='og:image' content={socialImageUrl} />
          <meta property="og:image:width" content="1600"/>
          <meta property="og:image:height" content="836"/>
          <meta property="og:image:alt" content={title}/>
        </>
      ) : (
        <meta name='twitter:card' content='summary' />
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={site?.name}
      />

      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <title>{title}</title>
    </Head>
  )
}
