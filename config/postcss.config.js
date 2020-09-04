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
      whitelist: [
        'lazyloaded',
        'facebook-color',
        'twitter-color',
        'instagram-color',
        'linkedin-color',
        ...whitelister([
          './assets/scss/common/_syntax.scss',
          './assets/scss/components/_code.scss',
          './static/scss/vendor/slick/slick.scss',
          './static/scss/vendot/slick/slick-theme.scss',
        ]),
      ],
    }),
  ],
}
