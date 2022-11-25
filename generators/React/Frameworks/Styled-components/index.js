const Generator = require('yeoman-generator')
const mkdirp = require('mkdirp')
module.exports = class extends Generator {
  installDependencies () {
    this.npmInstall(['styled-components'], {
      save: true
    })
  }

  createFolder () {
    mkdirp('src/Styled-components')
  }
}
