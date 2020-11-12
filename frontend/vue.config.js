const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  pages: {
    main: {
      entry: "src/js/main.js",
      minify: true,
      filename:
        process.env.NODE_ENV === "production"
          ? "../resources/views/index.blade.php"
          : "./index.html",
      template:
        process.env.NODE_ENV === "production"
          ? "../resources/stubs/production-index.blade.stub"
          : "../resources/stubs/development-index.stub"
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: process.env.API_URL
      },
      "/broadcasting": {
        target: process.env.API_URL
      }
    }
  },
  outputDir: "../public/",
  configureWebpack: {
    resolve: {
      alias: {
        "@root": `${__dirname}/src/js`,
        "@views": `${__dirname}/src/js/views`,
        "@store": `${__dirname}/src/js/store`,
        "@components": `${__dirname}/src/js/components`,
        "@assets": `${__dirname}/src/js/assets`
      }
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "../resources/images",
            to: "images/",
            force: true
          }
        ]
      })
    ]
  },
  chainWebpack: config => {
    const scssRules = config.module.rule("scss").oneOfs;
    const normalRule = scssRules.store.get("normal");
    const lazyRule = config.module.rule("scss").oneOf("scss-lazy");

    normalRule.uses.values().forEach(use => {
      if (use.name !== "vue-style-loader") {
        lazyRule.use(use.name).merge(use.entries());
        return;
      }

      lazyRule
        .use("style-loader")
        .loader("style-loader")
        .options({
          injectType: "lazyStyleTag",
          insert: function insertAtTop(element) {
            const parent = document.querySelector("head");
            parent.insertBefore(element, parent.firstChild);
          }
        });
    });

    lazyRule.test(/\.lazy\.scss$/);

    scssRules.store.delete("normal", "scss-lazy");
    scssRules.store.set("scss-lazy", lazyRule);
    scssRules.store.set("normal", normalRule);

    config.module
      .rule("images")
      .use("url-loader")
      .tap(options => ({
        ...options,
        name: "images/[name].[ext]"
      }));

    config.module
      .rule("svg")
      .use("file-loader")
      .tap(options => ({
        ...options,
        name: "images/[name].[ext]"
      }));
  },
  productionSourceMap: false,
  css: {
    extract: false
  }
};
