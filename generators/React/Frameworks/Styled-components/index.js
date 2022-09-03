const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  installDependencies () {
    this.npmInstall(['styled-components'], {
      save: true
    })
  }
}
