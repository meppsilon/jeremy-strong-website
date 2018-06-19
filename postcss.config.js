const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssVars = require('postcss-css-variables');
const path = require('path');

const srcPath = path.join(__dirname, 'src');


module.exports = {
    plugins: [
      postcssImport({
        path: srcPath,
      }),
      tailwindcss(path.join(srcPath, 'css/tailwind/config.js')),
      postcssVars(),
      require('autoprefixer'),
    ],
};
