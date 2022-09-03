const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  installDependencies () {
    this.npmInstall(
      [
        '@chakra-ui/react',
        '@emotion/react',
        '@emotion/styled',
        'framer-motion'
      ],
      {
        save: false
      }
    )
  }
}
