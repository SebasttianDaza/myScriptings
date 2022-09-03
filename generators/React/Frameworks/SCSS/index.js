const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  installDependencies () {
    this.npmInstall(
      [
        'sass'
      ],
      { 'save-dev': true }
    )
  }

  createFiles () {
  }
}
