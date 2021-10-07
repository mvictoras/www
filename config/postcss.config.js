const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './content/**/*.md',      
        './layouts/**/*.html',
      ],
      safelist: [
        'btn',
        'btn-group',
        'btn-secondary',
        'btn-sm',
        'dropdown-toggle',
        'dropdown-menu',
        'dropdown-item',
        'facebook-color',
        'instagram-color',
        'lazyloaded',
        'linkedin-color',
        'twitter-color',
        'vm-btn-add',
        ...whitelister([
          './assets/scss/common/_global.scss',
          './assets/scss/common/_syntax.scss',
          './assets/scss/components/_code.scss',
        ]),
      ],
    }),
  ],
}
