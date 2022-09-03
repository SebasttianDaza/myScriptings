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
    this.mkdir('src/scss')
    this.fs.copy(
      this.templatePath('./Template/scss/'),
      this.destinationPath('src/scss')
    )
  }
}
