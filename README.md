# Victor's personal website

[![GitHub release](https://img.shields.io/github/release/mvictoras/www.svg)](https://github.com/mvictoras/www/releases)
[![Build Status](https://img.shields.io/circleci/build/gh/mvictoras/www?token=37891ab0d63aeb4d4963af2cc20533c3e6a4ca00)](https://circleci.com/gh/mvictoras/www)
[![Netlify](https://img.shields.io/netlify/f4ee6127-6b8e-4780-a7b5-d9d63d396e83)](https://dazzling-haibt-c41dcb.netlify.app/)
![Dependencies](https://img.shields.io/librariesio/github/mvictoras/www)

![Dependabot](https://badgen.net/dependabot/thepracticaldev/dev.to?icon=dependabot)
[![Github Issues](https://badgen.net/github/open-issues/mvictoras/www)](https://github.com/mvictoras/www/issues)

## Features
- Lightweight code base
- 100 scores Google Lighthouse
- A+ scores [Mozilla Observatory](https://observatory.mozilla.org/)
- Easily make it your own
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/download/#source-files) Sass (no JavaScript) and [Autoprefixer](https://github.com/postcss/autoprefixer)
- Check SCSS for errors with [stylelint](https://stylelint.io/)
- Check JavaScript for errors with [ESLint](https://eslint.org/)
- Environment specific configuration
- Image shortcode with [lazysizes](https://github.com/aFarkas/lazysizes) and [blur up](https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up) plugin
- Fingerprinting and [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (production)
- Remove unused CSS (production) with [PurgeCSS](https://github.com/FullHuman/purgecss)

## Requirements

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/) >= 0.69.0/extended
- [Node.js](https://nodejs.org/) >= 13.11.0

## Get started

Clone the repo

```
$ git clone git@github.com:mvictoras/www.git
```

Install dependencies

```
$ npm install
$ npm run install:deps
```
Build development theme with live reloading and injection:

```bash
$ npm start
```

### Other commands
- `npm run lint:styles` - Check Sass for errors
- `npm run lint:scripts` - Check JavaScript for errors
- `npm clean` - Delete temporary directories
- `npm run clean:dep` - Delete vendor files
- `npm build` - Build production theme

### To add a js or css package
```
$ bower install package_name --save
$ grunt
```
then edit config.toml and add package in Params under js or css.
PLEASE NOTE that order DOES matter!

## Acknowledgements

Website structure inspired by [Hugo starter](https://github.com/h-enk/hyas)
