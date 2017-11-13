
# AngularTourOfHeros

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Diference between SystemJS and Webpack and Why do we even need these ?

SystemJS works client side. It loads modules (files) dynamically on demand when they are needed. You don't have to load the entire app up front. You could load a file, for example, inside a button click handler.

SystemJS code:
```
// example import at top of file
import myModule from 'my-module'
myModule.doSomething()

// example dynamic import (could be placed anywhere in your code)
// module not loaded until code is hit
System.import('my-module').then((myModule) {
  // myModule is available here
  myModule.doSomething()
});
```

Other than configuring it to work, that's all there is to SystemJS! You are now a SystemJS pro!

Webpack is entirely different and takes forever to master. It does not do the same thing as SystemJS but, when using Webpack, SystemJS becomes redundant.

Webpack prepares a single file called bundle.js - This file contains all HTML, CSS, JS, etc. Because all files are bundled in a single file, there is now no need for a lazy loader like SystemJS (where individual files are loaded as needed).

The upside of SystemJS is this lazy loading. The app should load faster because you are not loading everything in one hit.

The upside of Webpack is that, although the app may take a few seconds to load initially, once loaded and cached it is lightning fast.

I prefer SystemJS but Webpack seems to be trendier.

Angular2 quickstart uses SystemJS.

Angular CLI uses Webpack.

Webpack 2 (which will offer tree shaking) is in beta so maybe it's a bad time to move to Webpack.

Note SystemJS is implementing the ES6 module loading standard. Webpack is just another npm module.

##Task runners (optional reading for those who want to understand the ecosystem in which SystemJS might exist)

With SystemJS its sole responsibility is the lazy loading of files so something is still needed to minify those files, transpile those files (e.g. from SASS to CSS), etc. These jobs that must be done are known as tasks.

Webpack, when configured, correctly does this for you (and bundles the output together). If you want to do something similar with SystemJS you would typically use a JavaScript task runner. The most popular task runner is another npm module called **gulp**.

So, for example, SystemJS might lazy load a minified JavaScript file that has been minified by gulp. Gulp, when setup correctly, can minify files on the fly and live reload. Live reloading is the automatic detection of a code change and an automatic browser refresh to update. Great during development. With CSS, live streaming is possible (i.e. you see the page update the new styles without the page even reloading).

There are many other tasks which Webpack and gulp can perform which would be too numerous to cover here. I've provided an example :)
