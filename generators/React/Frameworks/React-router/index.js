const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  installDependencies () {
    this.npmInstall(['react-router-dom@6'], { 'save-dev': false })
  }
}
