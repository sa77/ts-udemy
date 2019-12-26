// this file uses nodeJS features  => this is how you export an object in a NodeJS environment
// here we are exporting a JS object
// -- webpack needs an entry point (which file where your entire project starts)
//    - webpack will look into imports in this file and go to these files and have a look at their imports recursively
//    - then compiles all the content of these TS files with the help of ts-loader
//    - when using webpack (do not include extenstions .ts, .js)

// 'path' is a core nodeJS module - do not need to install this module standalone
const path = require('path');

module.exports = {
  mode: 'development', // makes debugging easier - meaningful user
  entry: './src/app.ts',
  output: { // single JS file that will be spitted out by Webpack
    // you can do - bundle.[contenthash].js to help caching (look for webpack docs for more info)
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // this needs to be absolute path: `path.resolve()` allows to build absolute path to a certain folder
    // __dirname constant is available globally in a NodeJS environment
    publicPath: 'dist' // additional config for webpack-dev-server to pick on new bundle on dev browser
  },
  devtool: 'inline-source-map', // supports source.js.pap files for local debugging (sourceMap: true - in .tsconfig.json)
  module: { // add extra functionalities in webpack
    rules: [
      {
        test: /\.ts$/,// test webpack performs in any file it finds - to figure out weather this rule applies to this file or not
        use: 'ts-loader', // what should be done with such a file (ts-loader for example will automatically considers .tsconfig.json file)
        exclude: /node_modules/
      }
    ]
  },
  resolve: { // which file extensions will webpack add to the imports it finds (since the imports does not have extensions specified in each TS files in the project) - default is that it'll look for .js files
    extensions: ['.ts', '.js']
  }
};

// === How to use webpack
//  add a scripts entry in package.json 'build: webpack'
