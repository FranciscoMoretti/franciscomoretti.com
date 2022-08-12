export const createOgImage = ({
    title,
    meta,
    padding = 80,
  }: {
    title: string
    meta: string,
    padding: number,
  }) =>
    [
      // ACCOUNT PREFIX
      `https://res.cloudinary.com/franciscomoretti/image/upload`,
      // Composed Image Transformations
      `w_1200,h_630,q_90`,
   
      // TITLE
      // Karla google font in light rose
      `l_text:Karla_54_bold:${e(title)},co_rgb:0C0C0C,c_fit,w_${1200-2*padding},h_140`,
      // Positioning
      `fl_layer_apply,g_north_west,x_${padding},y_${padding}`,
   
      // META
      // Karla, but smaller
      `l_text:Karla_36:${e(meta)},co_rgb:0C0C0CB0,c_fit,w_${1200-2*padding}`,
      // Positioning
      `fl_layer_apply,g_north_west,x_${padding},y_250`,
   
      // PROFILE IMAGE
      // dynamically fetched from my twitter profile
      `l_twitter_name:franmoretti_`,
      // Transformatio``ns
      `c_thumb,g_face,r_max,w_380,h_380,q_100`,
      // Positioning
      `fl_layer_apply,w_160,g_south_west,x_${padding},y_${padding}`,
   
      // BG
      `lego_social_image_background.png`,
   
  ].join("/")
   
  // double escape for commas and slashes
  const e = (str: string) => encodeURIComponent(encodeURIComponent(str))