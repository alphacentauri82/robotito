module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins'},
      {rel: 'stylesheet', href: 'https://unpkg.com/ionicons@4.4.4/dist/css/ionicons.min.css'}
    ]
  },
  plugins: ['~/plugins/vuetify.js'],

  /*
  ** Global CSS
  */
  css: ['~assets/app.styl'],
  loading: { color: '#3B8070' },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'vuetify'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
