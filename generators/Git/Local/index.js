const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  async prompting () {
    const answers = await this.prompt({
      type: 'boolean',
      name: 'appname',
      message: 'Is here your project?',
      default: true
    })

    this.appname = answers.appname
  }

  writing () {
    if (this.appname) {
      // Iniciar un git init
      this.spawnCommandSync('git', ['init'])
      this.spawnCommandSync('git', ['add', '.'])
      this.spawnCommandSync('git', ['commit', '-m', '"Initial commit"'])
    }
  }

  async questions () {
    if (!this.appname) {
      const answers = await this.prompt({
        type: 'input',
        name: 'directory',
        message: 'What is your project name?',
        default: 'my-project'
      })

      this.appnameChange = answers.directory
      changeDirectory()
    }
  }

  changeDirectory () {
    this.destinationRoot(this.appnameChange)
    this.spawnCommandSync('git', ['init'])
    this.spawnCommandSync('git', ['add', '.'])
    this.spawnCommandSync('git', ['commit', '-m', '"Initial commit"'])
  }
}
