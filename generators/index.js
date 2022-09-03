const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // Choosing generator
  async prompting () {
    this.log('Welcome to the React-Vue-JavaScript-Generator')
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What would you like to generate?',
        choices: [
          {
            name: 'React'
          },
          {
            name: 'JavaScript Vanilla'
          },
          {
            name: 'Vue'
          }
        ]
      },
      {
        type: 'confirm',
        name: 'initialRepo',
        message: 'Would you like to initialize a repository?',
        default: true
      },
      {
        type: 'list',
        name: 'createRepoRemote',
        message: 'Would you like to create a new repository with?',
        choices: [
          {
            name: 'GitHub'
          },
          {
            name: 'GitLab'
          },
          {
            name: 'BitBucket'
          }
        ]
      }
    ])

    const { type } = answers
    const { initialRepo } = answers
    const { createRepoRemote } = answers

    this.appname = type
    this.nameapp = answers.appname
    this.nameappall = answers.appnameall
    this.initialRepo = initialRepo
    this.createRepoRemote = createRepoRemote
  }

  useInfo () {
    if (this.appname === 'React') {
      this.composeWith(require.resolve('./React'))
    }

    if (this.appname === 'JavaScript Vanilla') {
      this.composeWith(require.resolve('./JavaScript'))
    }

    if (this.appname === 'Vue') {
      this.composeWith(require.resolve('./Vue'))
    }
  }

  initialRepo () {
    this.log('You must to start your repo with same name')
    if (this.initialRepo) {
      this.composeWith(require.resolve('./Git/Local'))
    }
  }

  createRepoRemote () {
    if (this.createRepoRemote === 'GitHub') {
      this.composeWith(require.resolve('./Git/Remote/GitHub'))
    }
    if (this.createRepoRemote === 'GitLab') {
      this.composeWith(require.resolve('./Git/Remote/GitLab'))
    }
    if (this.createRepoRemote === 'BitBucket') {
      this.composeWith(require.resolve('./Git/Remote/BitBucket'))
    }
  }
}
