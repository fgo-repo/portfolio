# Fabrice Goret's portfolio

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fgo-repo_portfolio&metric=alert_status)](https://sonarcloud.io/dashboard?id=fgo-repo_portfolio) [![Netlify Status](https://api.netlify.com/api/v1/badges/e6244f8a-4867-4eee-942f-4ee8f8dbf4cb/deploy-status)](https://app.netlify.com/sites/fabricegoret/deploys)

This is my personal website built using [Nuxt.js](https://nuxtjs.org) (Vuejs), [Bulma](https://bulma.io) (CSS framework) and [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll Library).

The personal information on the website is populated from a JSON file that follows the [FRESH Resume schema](https://github.com/fresh-standard/fresh-resume-schema) open source standard.

## Customizing it

Feel free to fork this project and update it with your own information and style. 
Update the following parts with your personal information:

* 'static/resume-XX.json' for your resume where XX is the language code
* 'static/images/ego.png' for your photo
* variable 'locales' in 'nuxt.config' to set all the default language and translations. If English is not your default language, replace the code "en" by yours in the i18n section too.
* variable 'baseUrl' in 'nuxt.config' to set your base url.
* locales/XX.json for the website pages translations where XX is the language code. For the moment, English and French are available, feel free to add yours.

## Build Setup

Commands from package.json:

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# generate static project and launch server
$ npm run dist
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contributing

Feel free to fork this project and customize with your personal info. If you implement any nice features or improvements I'd really appreciate if you could open a pull request to this project.

## License

MIT