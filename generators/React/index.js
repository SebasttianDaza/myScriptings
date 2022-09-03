const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  async prompting () {
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'eslint',
        message: 'What more would you like to add?',
        choices: [
          {
            name: 'React',
            checked: true
          },
          {
            name: 'React-Typescript'
          },
          {
            name: 'React-Typescript-Next'
          },
          {
            name: 'React-Next'
          }
        ]
      }, {
        type: 'checkbox',
        name: 'features',
        message: 'What more would you like to add?',
        choices: [
          {
            name: 'Axios'
          },
          {
            name: 'Redux && React-Redux'
          },
          {
            name: 'Bootstrap && React-Bootstrap'
          },
          {
            name: 'Jest'
          },
          {
            name: 'Sass'
          },
          {
            name: 'React-Router'
          },
          {
            name: 'Styled-Components'
          },
          {
            name: 'Chakra-UI'
          },
          {
            name: 'TailwindCSS'
          }
        ]
      }
    ])

    this.Eslint = answers.eslint
    this.Features = answers.features
  }

  selectEslint () {
    if (this.Eslint) {
      if (this.Eslint.includes('React')) {
        this.composeWith(require.resolve('../ESLint/React'))
      }
      if (this.Eslint.includes('React-Typescript')) {
        this.composeWith(require.resolve('../ESLint/React-Typescript'))
      }
      if (this.Eslint.includes('React-Typescript-Next')) {
        this.composeWith(
          require.resolve('../ESLint/React-Typescript-Next')
        )
      }
      if (this.Eslint.includes('React-Next')) {
        this.composeWith(require.resolve('../ESLint/React-Next'))
      }
    }
  }

  selectFeatures () {
    this.Features.forEach(feature => {
      if (feature === 'Sass') {
        this.composeWith(require.resolve('./Frameworks/SCSS'))
      }
      if (feature === 'Axios') {
        this.composeWith(require.resolve('./Frameworks/Axios'))
      }
      if (feature === 'Bootstrap && React-Bootstrap') {
        this.composeWith(require.resolve('./Frameworks/ReactBootstrap'))
      }
      if (feature === 'Redux && React-Redux') {
        this.composeWith(require.resolve('./Frameworks/Redux'))
      }
      if (feature === 'React-Router') {
        this.composeWith(require.resolve('./Frameworks/React-router'))
      }
      if (feature === 'Styled-Components') {
        this.composeWith(require.resolve('./Frameworks/Styled-components'))
      }
      if (feature === 'Chakra-UI') {
        this.composeWith(require.resolve('./Frameworks/Chakra'))
      }
    })
  }
}
