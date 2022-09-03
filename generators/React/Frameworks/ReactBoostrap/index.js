const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  installDependencies () {
    this.npmInstall(['react-bootstrap', 'bootstrap'], { 'save-dev': false })
  }
}
