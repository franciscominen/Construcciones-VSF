export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tener tu hogar es posible | Viviendas Santa Fe',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `Play "Which character are you?" Quiz, and share which Peanuts Experience character you are!`,
      },
      {
        hid: "keywords",
        name: "keywords",
        content: `peanuts, quiz, experience, snoopy, charlie, brown`,
      },
      {
        hid: "author",
        name: "author",
        content: `Peanuts`,
      },
      {
        hid: "image",
        name: "image",
        content:
          "https://firebasestorage.googleapis.com/v0/b/lacoste-ecommerce.appspot.com/o/default.png?alt=media&token=be8d9c1d-d991-408e-9f13-dc2b390d0a43",
      },
      { name: "format-detection", content: "telephone=no" },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@searchforsnoopy",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        /* content: `${basePath}`, */
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Peanuts Quiz | Which character are you?",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: `Play "Which character are you?" Quiz, and share which Peanuts Experience character you are!`,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://nuxtjs.org/nuxt-card.png",
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "SearchForSnoopy",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
       /*  content: `${basePath}`, */
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Peanuts Quiz | Which character are you?",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: `Play "Which character are you?" Quiz, and share which Peanuts Experience character you are!`,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://nuxtjs.org/nuxt-card.png",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        /* content: `${basePath}`, */
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Peanuts Quiz | Which character are you?",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  target: 'static',
  server: {
    port: 8000 // default: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css',
  ],
  /*   styleResources: {
      scss: [
        '~/assets/main.scss',
      ]
    }, */

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/lottie-player.js", mode: "client" },
    { src: "~/plugins/vue-carousel.js" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],
  device: {
    refreshOnResize: true,
    defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyBt_IUivmdaWIijgTFh5ZcDRnlFpxeOB5k",
      authDomain: "viviendassantafe.firebaseapp.com",
      projectId: "viviendassantafe",
      storageBucket: "viviendassantafe.appspot.com",
      messagingSenderId: "716133326887",
      appId: "1:716133326887:web:7a0d5807cfdcfd306fee02"
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: false,
      },
      firestore: true,
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },

  /*
** Router configuration
*/
  router: {
    middleware: ['auth'],
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  }
}