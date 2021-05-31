const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.entry('app')
      .clear()
      .add('./site/main.js');
  }
}