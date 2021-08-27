module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    html: ["./index.html"],
    port: 1234,
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      css: "./src/assets/css",
      js: "./src/assets/js",
      img: "./src/assets/img",
    },
    dist: {
      base: "./docs",
      css: "./docs/assets/css",
      js: "./docs/assets/js",
      img: "./docs/assets/img",
    },
  },
};
