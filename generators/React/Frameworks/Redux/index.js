const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  installDependencies () {
    this.npmInstall([' @reduxjs/toolkit', 'react-redux'], { 'save-dev': false })
  }
}
