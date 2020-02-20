module.exports = {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: process.env.npm_package_description || ""}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: "#882021"},
  /*
  ** Global CSS
  */
  css: ["vuetify/dist/vuetify.css"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~/plugins/vue-gallery.js", mode: "client"},
    {src: "~/plugins/vue-carousel.js", mode: "client"},
    {src: "~/plugins/vue-magic-grid.js", mode: "client"}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxtjs/vuetify",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: "#882021",
          secondary: "#003E82"
        }
      }
    },
    breakpoint: {
      thresholds: {
        xs: 319,
        sm: 424,
        md: 767,
        lg: 1023,
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
