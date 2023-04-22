module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/helper/_variables.scss"`,
      },
    },
  },
};
