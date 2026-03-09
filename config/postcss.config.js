const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './content/**/*.md',
        './layouts/**/*.html',
        './themes/academic/layouts/**/*.html',
      ],
      safelist: {
        standard: [
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
          'bottom-align-text',
          'image-with-title',
          'noleftpadding',
          'related-press',
          'threads-color',
        ],
        greedy: [/^pswp/],
      },
    }),
  ],
};
