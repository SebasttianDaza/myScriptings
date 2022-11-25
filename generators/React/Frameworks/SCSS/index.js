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

  createFolderWithFiles () {
    this.createFolder('src/scss')
    this.createFolder('src/scss/base')
    this.createFolder('src/scss/components')
  }
}
