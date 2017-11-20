const { mix } = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const glob = require('glob-all')
const purgecss = require('purgecss-webpack-plugin')
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Custom Tailwind PurgeCSS Extractor
 |--------------------------------------------------------------------------
 |
 | https://github.com/FullHuman/purgecss-webpack-plugin
 | https://gist.github.com/andrewdelprete/277a5a2af33aea2481c54a6a8b35d6c3
 */

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your site. By default, we are compiling the Sass file
 | as well as bundling up your JS files.
 |
 | To learn more about Mix visit: https://laravel.com/docs/master/mix
 */

mix
  .js('resources/js/main.js', 'assets/js')
  .copy('node_modules/lazysizes/lazysizes.min.js', 'assets/js/lazysizes.min.js')
  .postCss(
    'resources/css/main.css',
    'assets/css',
    [
      tailwindcss('tailwind.css.js'),
      autoprefixer
    ])

if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new purgecss({
        whitelist: [],
        paths: glob.sync([
          path.join(__dirname, 'resources/js/**/*.js'),
          path.join(__dirname, 'resources/js/**/*.vue'),
          path.join(__dirname, 'resources/views/**/*.blade.php'),
          path.join(__dirname, 'site/plugins/**/*.js'),
          path.join(__dirname, 'site/plugins/**/*.php')
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'php', 'vue']
          }
        ]
      })
    ]
  })
}
