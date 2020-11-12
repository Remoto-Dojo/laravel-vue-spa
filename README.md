# Laravel - Vue Server Driven Single Page App Scaffolding
An implementation of API driven SPA project built with Laravel 8.x, Vue.js 2.x and more all in one project repository.

## Requirements
* See the [Laravel server requirements](https://laravel.com/docs/8.x/installation#server-requirements).
* See the [VueJS 2.x introduction and installation guide](https://vuejs.org/v2/guide/installation.html).

## Installation Steps

**Back-end (Laravel serving as API)**

1.  Download the project from the repository
2.  Within the project folder run the command `php composer install` to install `PHP` dependencies.
3.  Create a database (see the [Laravel database documentation](https://laravel.com/docs/7.x/database)), copy or rename the `.env.example` file to `.env`, edit the database configuration information, and run `php artisan key:generate`
4.  In order to serve the back-end API, take a look at the Local Development Server section of the [Laravel installation documentation](https://laravel.com/docs/7.x/#installation).
5.  Run Laravel migration `php artisan migrate --seed`


**Front-end (VueJS) Production**

1.  Open the `frontend/` folder, copy the `.env.example` file, save it as `.env` and set the URL for the back-end API (which you've configured at step 4)
2.  In your terminal or command prompt, change directory to `frontend/` and run `yarn && yarn build`
3.  For live reload / hot module replacement functionality run `yarn serve`
4.  TODO: for running tests and more :).


**Front-end (VueJS) Development**

*   Project setup `yarn install`
*   Compiles and hot-reloads for development `yarn serve`
*   Compiles and minifies for production `yarn build`
*   Run your unit tests `yarn test:unit`
*   Run your end-to-end tests `yarn test:e2e`
*   Lints and fixes files `yarn lint`
*   Customize configuration see [Configuration Reference](https://cli.vuejs.org/config/).


## Run Laravel Tests
Run unit tests
```bash
./vendor/bin/phpunit --testsuite Unit
```

Run feature tests
```bash
./vendor/bin/phpunit --testsuite Feature
```

---

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

## About Vue.js
For a guide and recipes on how to configure / customize this project,  
check out the [vue-cli documentation](https://cli.vuejs.org).

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Installed CLI Plugins

*   [babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel)
*   [router](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router)
*   [vuex](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex)
*   [vuetifyjs](https://vuetifyjs.com/)
*   [axios](https://github.com/axios/axios)
*   [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)
*   [unit-mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha)
*   [e2e-cypress](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress)

#### Essential Links

*   [Core Docs](https://vuejs.org)
*   [Forum](https://forum.vuejs.org)
*   [Community Chat](https://chat.vuejs.org)
*   [Twitter](https://twitter.com/vuejs)
*   [News](https://news.vuejs.org)

#### Ecosystem

*   [vue-router](https://router.vuejs.org)
*   [vuex](https://vuex.vuejs.org)
*   [vue-devtools](https://github.com/vuejs/vue-devtools#vue-devtools)
*   [vue-loader](https://vue-loader.vuejs.org)
*   [awesome-vue](https://github.com/vuejs/awesome-vue)
