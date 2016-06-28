## About

Contact-list app heavily based on [AngularJS Boilerplate](https://github.com/jbutko/AngularJS-Boilerplate).

## 0. Requirements
- Node 4+
- bower
- gulp
- compass

Also for end-to-end testing you will need running selenium server that could be easily achived by using [webdriver-manager](https://www.npmjs.com/package/webdriver-manager)

## 1. Setup
```bash
npm install
```

**Note:** If `npm install` fails during dependency installation it will be likely caused by `gulp-imagemin`. In that case remove `gulp-imagemin` dependency from `package.json`, run `npm install` again and then install `gulp-imagemin` separately with following command: `npm install gulp-imagemin --save-dev`

## 2. Watch files
```bash
gulp
```
- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync

## 3. Build production version
```bash
gulp build
```
- this will process following tasks:
* clean _build folder
* compile SASS files, minify and uncss compiled css
* copy and optimize images
* minify and copy all HTML files into $templateCache
* build index.html
* minify and copy all JS files
* copy fonts
* show build folder size

## 4. Start webserver without watch task
```bash
gulp server
```

## 5. Start webserver from build folder
```bash
gulp server-build
```
