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
      `w_1600,h_836,q_100`,
   
      // TITLE
      // Karla google font in light rose
      `l_text:Karla_72_bold:${e(title)},co_rgb:080C0C,c_fit,w_1400,h_240`,
      // Positioning
      `fl_layer_apply,g_south_west,x_100,y_180`,
   
      // META
      // Karla, but smaller
      `l_text:Karla_48:${e(meta)},co_rgb:080C0C80,c_fit,w_1400`,
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
      `shapelined.jpg`,
   
  ].join("/")
   
  // double escape for commas and slashes
  const e = (str: string) => encodeURIComponent(encodeURIComponent(str))