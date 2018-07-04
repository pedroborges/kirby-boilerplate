const mix          = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const glob         = require('glob-all')
const tailwind     = require('tailwindcss')

require('laravel-mix-purgecss')

mix
    .js('./resources/js/main.js', 'assets/js')
    .options({ processCssUrls: false })
    .postCss('./resources/css/main.css', 'assets/css', [
        tailwind('./tailwind.js'),
        autoprefixer
    ])
    .purgeCss({
        whitelist: [],
        paths: glob.sync([
            path.join(__dirname, 'resources/js/**/*.js'),
            path.join(__dirname, 'resources/views/**/*.blade.php'),
            path.join(__dirname, 'site/plugins/**/*.js'),
            path.join(__dirname, 'site/plugins/**/*.php')
        ])
    })
