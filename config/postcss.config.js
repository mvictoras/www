const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',      
      ],
      safelist: [
        'lazyloaded',
        'facebook-color',
        'twitter-color',
        'instagram-color',
        'linkedin-color',
        'dropdown-toggle',
        ...whitelister([
          './assets/scss/common/_global.scss',
          './assets/scss/common/_syntax.scss',
          './assets/scss/components/_code.scss',
        ]),
      ],
    }),
  ],
}
