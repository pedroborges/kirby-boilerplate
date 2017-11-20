const { mix } = require('laravel-mix')

mix.options({
  purifyCss: {
    minimize: true,
    paths: [
      'resources/views/**/*.php',
      // 'resources/js/**/*.js'
    ]
  },
});

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

mix.js('resources/js/main.js', 'public/js')
  .postCss('resources/css/main.css', 'public/css', [
    require('tailwindcss')('./tailwind.css.js'),
    require('autoprefixer')
  ])
