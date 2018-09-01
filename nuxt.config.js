const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:title', content: 'T-wice(티와이스)' },
      {
        property: 'og:description',
        content: '차를 사랑하는 디지털 노마드를 위한 셀프 가드닝 헬퍼'
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1521623525276-1ba1f025cbaa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49aaa53cc086c42baad42b10d59d11d9&auto=format&fit=crop&w=2500&q=80'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-default/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/element-ui'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
