export const createOgImage = ({
    title,
    meta,
    twitter,
    padding = 80,
  }: {
    title: string
    meta: string,
    twitter: string,
    padding?: number,
  }) =>
    [
      // ACCOUNT PREFIX
      `https://res.cloudinary.com/franciscomoretti/image/upload`,
      // Composed Image Transformations
      `w_1200,h_630,q_90`,
   
      // TITLE
      // Karla google font in dark grey
      `l_text:Karla_54_bold:${e(title)},co_rgb:0C0C0C,c_fit,w_${1200-2*padding},h_140`,
      // Positioning
      `fl_layer_apply,g_north_west,x_${padding},y_${padding}`,
   
      // META
      // Karla, but smaller and lighter
      `l_text:Karla_36:${e(meta)},co_rgb:0C0C0CB0,c_fit,w_${1200-2*padding}`,
      // Positioning
      `fl_layer_apply,g_north_west,x_${padding},y_250`,
   
      // PROFILE IMAGE
      // dynamically fetched from my twitter profile
      `l_twitter_name:${twitter}`,
      // Transformatio``ns
      `c_thumb,g_face,r_max,w_380,h_380,q_100,bo_8px_solid_rgb:178FC5`,
      // Positioning
      `fl_layer_apply,w_170,g_south_west,x_${padding},y_${padding}`,
   
      // LOGO IMAGE
      `l_image:logo.svg`,
      // Transformatio``ns
      `c_thumb,w_52,q_100`,
      // Positioning
      `fl_layer_apply,w_52,g_south_west,x_${padding},y_${padding}`,

      // BG
      `lego_social_image_background.png`,
   
  ].join("/")
   
  // double escape for commas and slashes
  const e = (str: string) => encodeURIComponent(encodeURIComponent(str))