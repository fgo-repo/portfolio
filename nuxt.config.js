const path = require("path")
var glob = require('glob')
let baseUrl = 'https://www.fabricegoret.com'
let locales = [
  {
    code: 'fr',
    name: 'Français',
    file: 'fr.json'
  },
  {
    code: 'en', // Default locale is the last one! We don't have the code for this one in the url. Set it in i18n.defaultLocale
    name: 'English',
    file: 'en.json'
  }
]
let files = locales.map(locale => {
  return glob.sync('**/*.md', { cwd: `staticMarkdowns/contents/${locale.code}` })
    .map(d => (locale.code != locales[locales.length-1].code ? `/${locale.code}/posts/` : '/posts/') + d.substr(0, d.lastIndexOf('.')))   
}).reduce((acc, val) => acc.concat(val), [])

module.exports = {
  mode: 'universal',
  env: {
    baseUrl:  process.env.BASE_URL || baseUrl,
    staticformsKey:  process.env.STATIC_FORM_KEY || '',
    googleAnalyticKey:  process.env.GOOGLE_ANALYTIC_KEY || ''
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
      { name: 'theme-color', content: '#31afdd' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:site_name', content: 'portfolio' },
      { property: 'og:updated_time', content: new Date().toISOString() }
    ],
    script: [
    ],
    link: [
      // https://favicon.io/favicon-generator/?t=FG&ff=Acme&fs=110&fc=%23FFFFFF&b=rounded&bc=%2331afdd
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {src: '@/assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/aos", ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/prism', ssr: false },
    { src: '~/plugins/lazysizes.client.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        // lazysizes config
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
      
      // run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
          }
        })
      }
    }
  },
  sitemap: {
    hostname: baseUrl,
    routes() {
      return files;
    },
    path: '/sitemap.xml',
    gzip: true,
    generate: false,
     // shortcut notation (basic)
     i18n: 'en',
     // nuxt-i18n notation (advanced)
     i18n: {
       defaultLocale: 'en',
       locales: locales,
       routesNameSeparator: '___'
     }
  },
  i18n: {
    // vue-i18n configuration
    vueI18n: {},
  
    // If true, vue-i18n-loader is added to Nuxt's Webpack config
    vueI18nLoader: false,
  
    // List of locales supported by your app
    // This can either be an array of codes: ['en', 'fr', 'es']
    // Or an array of objects for more complex configurations:
    // [
    //   { code: 'en', iso: 'en-US', file: 'en.js' },
    //   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
    //   { code: 'es', iso: 'es-ES', file: 'es.js' }
    // ]
    //   `iso` value should have either:
    //   - code of ISO 639-1 (e.g. 'en')
    //   - code of ISO 639-1 and code of ISO 3166-1 alpha-2, with a hyphen (e.g. 'en-US')
    locales: locales,
  
    // The app's default locale, URLs for this locale won't have a prefix if
    // strategy is prefix_except_default
    defaultLocale: 'en',
  
    // Separator used to generated routes name for each locale, you shouldn't
    // need to change this
    routesNameSeparator: '___',
  
    // Suffix added to generated routes name for default locale if strategy is prefix_and_default,
    // you shouldn't need to change this
    defaultLocaleRouteNameSuffix: 'default',
  
    // Routes generation strategy, can be set to one of the following:
    // - 'no_prefix': routes won't be prefixed
    // - 'prefix_except_default': add locale prefix for every locale except default
    // - 'prefix': add locale prefix for every locale
    // - 'prefix_and_default': add locale prefix for every locale and default
    strategy: 'prefix_except_default',
  
    // Wether or not the translations should be lazy-loaded, if this is enabled,
    // you MUST configure langDir option, and locales must be an array of objects,
    // each containing a file key
    lazy: true,
  
    // Directory that contains translations files when lazy-loading messages,
    // this CAN NOT be empty if lazy-loading is enabled
    langDir: 'locales/',
  
    // Set this to a path to which you want to redirect users accessing root URL (/)
    rootRedirect: null,
  
    // Enable browser language detection to automatically redirect user
    // to their preferred language as they visit your app for the first time
    // Set to false to disable
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Cookie name
      cookieKey: 'i18n_redirected',
      // Set to always redirect to value stored in the cookie, not just once
      alwaysRedirect: false,
      // If no locale for the browsers locale is a match, use this one as a fallback
      fallbackLocale: 'en'
    },
  
    // Set this to true if you're using different domains for each language
    // If enabled, no prefix is added to your routes and you MUST configure locales
    // as an array of objects, each containing a domain key
    differentDomains: false,
  
    // If using different domains, set this to true to get hostname from X-Forwared-Host
    // HTTP header instead of window.location
    forwardedHost: false,
  
    // If true, SEO metadata is generated for routes that have i18n enabled.
    // Note that performance can suffer with this enabled and there might be compatibility
    // issues with some plugins. Recommended way is to set up SEO as described in:
    // https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance
    seo: false,
  
    // Fallback base URL to use as prefix for alternate URLs in hreflang tags.
    // By default VueRouter's base URL will be used and only if that is not available,
    // fallback URL will be used.
    baseUrl: '',
  
    // By default a store module is registered and kept in sync with the
    // app's i18n current state
    // Set to false to disable
    vuex: {
      // Module namespace
      moduleName: 'i18n',
  
      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: false,
  
      // If enabled, current translation messages are synced with nuxt-i18n store module
      syncMessages: false,
  
      // Mutation to commit to set route parameters translations
      syncRouteParams: true
    },
  
    // By default, custom routes are extracted from page files using babel parser,
    // set this to false to disable this
    parsePages: true,
  
    // If parsePages option is disabled, the module will look for custom routes in
    // the pages option, refer to the "Routing" section for usage
    pages: {},
  
    // By default, custom paths will be encoded using encodeURI method.
    // This does not work with regexp: "/foo/:slug-:id(\\d+)". If you want to use
    // regexp in the path, then set this option to false, and make sure you process
    // path encoding yourself.
    encodePaths: false,
  
    // Called right before app's locale changes
    beforeLanguageSwitch: (oldLocale, newLocale) => null,
  
    // Called after app's locale has changed
    onLanguageSwitched: (oldLocale, newLocale) => null
  },
  generate: {
    subFolders: false,
    routes: files
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}