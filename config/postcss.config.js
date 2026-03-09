const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './content/**/*.md',
        './layouts/**/*.html',
        './themes/academic/layouts/**/*.html',
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
        'bluesky-color',
        'heart-emoji',
        'instagram-color',
        'lazyloaded',
        'linkedin-color',
        'vm-btn-add',
        'card-disabled',
        ...whitelister([
          './themes/academic/assets/scss/common/_global.scss',
          './themes/academic/assets/scss/common/_syntax.scss',
          './themes/academic/assets/scss/components/_code.scss',
        ]),
      ],
    }),
  ],
}
