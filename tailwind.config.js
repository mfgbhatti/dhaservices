module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        security1: "url('../img/event-security.jpg')",
        security2: "url('../img/manned-security.jpg')",
        security3: "url('../img/security.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
