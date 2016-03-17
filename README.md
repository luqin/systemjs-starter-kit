# System.js Starter Project

[![NPM version][npm-badge]][npm] [![Build Status][travis-ci-image]][travis-ci-url]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

## Techniques

- [System.js](https://github.com/systemjs/systemjs)
- [react](http://facebook.github.io/react/)
- [babeljs](https://babeljs.io/)
- [react-router](https://github.com/rackt/react-router)
- [eslint](http://eslint.org/)
- [gulp](http://gulpjs.com/) Aren't NPM scripts better? [No](https://twitter.com/jaffathecake/status/700320306053935104).
- [three.js](https://github.com/mrdoob/three.js)
- [ECharts](https://github.com/ecomfe/echarts)
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- And much more. Check source code.

## Prerequisites

- [node.js](http://nodejs.org) (Node 5 with npm 3 is required).
- [gulp](http://gulpjs.com/) (`npm install -g gulp`)

If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) to manage them.

## Getting Started

1. Install the local packages for this demo.
  
  ```sh
  npm install
  ```

2. Run the server, launch the browser, and transpile the ES6 to ES5 using Babel

  ```sh
  npm start
  ```

## Details

The source code is located in the `js` folder and written in ES6. We use `gulp` to transpile the ES6 to ES5 using Babel. The `npm start` command runs the `gulp serve` task which transpiles the code and puts it in the `dist` folder and then watches for more changes. If you change the source, it will transpile again. It also runs the superstatic server (you can run any server you want, but this is super simple) and launches the browser using browser-sync. When any files change, the browser will reload.

When you launch a browser to [http://localhost:3000](http://localhost:3000) SystemJS kicks in and looks for `system.config.js` for its settings. We tell SystemJS to use Babel to transpile and that the baseURL for the code is in `./assets`. This is important so all import statements that were written assuming relative pathing in the `src` folder will still work. Finally, we tell SystemJS that import statements by default should assume they end with `.js`. This is accomplished by setting `defaultJSExtensions` to `true`. See below for an example.

```js
System.config({
    baseURL: './assets',
    defaultJSExtensions: true
});
```

We can now import the main starting modules `main.js` like this:

```js
System.import('demo/main');
```

[npm-badge]: http://badge.fury.io/js/systemjs-starter-kit.svg
[npm]: https://www.npmjs.com/package/systemjs-starter-kit

[deps-badge]: https://david-dm.org/luqin/systemjs-starter-kit.svg
[deps]: https://david-dm.org/luqin/systemjs-starter-kit

[dev-deps-badge]: https://david-dm.org/luqin/systemjs-starter-kit/dev-status.svg
[dev-deps]: https://david-dm.org/luqin/systemjs-starter-kit#info=devDependencies

[peer-deps-badge]: https://david-dm.org/luqin/systemjs-starter-kit/peer-status.svg
[peer-deps]: https://david-dm.org/luqin/systemjs-starter-kit#info=peerDependencies 

[travis-ci-image]: https://travis-ci.org/luqin/systemjs-starter-kit.svg
[travis-ci-url]: https://travis-ci.org/luqin/systemjs-starter-kit
