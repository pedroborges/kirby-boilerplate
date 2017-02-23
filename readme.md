# Kirby Boilerplate

Kirby CMS Boilerplate I've put together using my preferred technologies. Expect it to be opinionated!

## Technologies
- [Kirby CMS](https://getkirby.com)
- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme)
- [Yarn](https://yarnpkg.com)
- [Webpack](https://webpack.js.org)
- [PostCSS](http://postcss.org)
- [Tachyons CSS](http://tachyons.io)

## Installation
Copy the `.env.example` file to `.env` and adjust the settings to your needs.

> The `.env` file should remain out of version control.

Use Kirby's [command line interface](https://github.com/getkirby/cli) to install Kirby and the Panel:

    $ kirby install:core

    $ kirby install:panel

Use [Yarn](https://yarnpkg.com) to install the Javascript dependencies:

    $ yarn

> Alternatively you can run `npm install`.

## Usage
Laravel Mix is a configuration layer on top of Webpack, so to run your Mix tasks you only need to execute one of the NPM scripts that is included on the package.json file.

Run all Mix tasks once:

    $ yarn run dev

Run all Mix tasks and watch all relevant files for changes:

    $ yarn run watch

Run all Mix tasks and minify output:

    $ yarn run production

## Recommended Plugins

### Auto Git

    $ kirby plugin:install pedroborges/kirby-autogit

### Cachebuster

    $ kirby plugin:install cachebuster-plugin

### Google Analytics

    $ kirby plugin:install pedroborges/kirby-google-analytics

### Sitemap

    $ kirby plugin:install pedroborges/kirby-xml-sitemap

## License
Kirby Boilerplate is open-sourced software licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Copyright © 2017 Pedro Borges <oi@pedroborg.es>
