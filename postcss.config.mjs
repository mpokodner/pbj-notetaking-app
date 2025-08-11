const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Explicitly configure autoprefixer to avoid lightningcss issues
      flexbox: "no-2009",
      grid: "autoplace",
    },
  },
};

export default config;
