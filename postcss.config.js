const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssVars = require('postcss-css-variables');
const path = require('path');


module.exports = {
    plugins: [
      postcssImport({
        path: path.join(__dirname, 'src'),
      }),
      tailwindcss('./tailwind.config.js'),
      postcssVars(),
      require('autoprefixer'),
    ],
};
