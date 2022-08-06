export const createOgImage = ({
    title,
    meta,
  }: {
    title: string
    meta: string
  }) =>
    [
      // ACCOUNT PREFIX
      `https://res.cloudinary.com/franciscomoretti/image/upload`,
      // Composed Image Transformations
      `w_1200,h_630,q_90`,
   
      // TITLE
      // Karla google font in light rose
      `l_text:Karla_54_bold:${e(title)},co_rgb:080C0C,c_fit,w_1000,h_240`,
      // Positioning
      `fl_layer_apply,g_south_west,x_100,y_180`,
   
      // META
      // Karla, but smaller
      `l_text:Karla_36:${e(meta)},co_rgb:080C0C90,c_fit,w_1000`,
      // Positioning
      `fl_layer_apply,g_south_west,x_100,y_100`,
   
      // PROFILE IMAGE
      // dynamically fetched from my twitter profile
      `l_twitter_name:franmoretti_`,
      // Transformations
      `c_thumb,g_face,r_max,w_380,h_380,q_100`,
      // Positioning
      `fl_layer_apply,w_140,g_north_west,x_100,y_100`,
   
      // BG
      `shapelined.png`,
   
  ].join("/")
   
  // double escape for commas and slashes
  const e = (str: string) => encodeURIComponent(encodeURIComponent(str))