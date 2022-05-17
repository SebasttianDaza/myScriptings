const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    installDependencies() {
        this.npmInstall([
          "prettier",
          "eslint",
          "eslint-config-prettier",
          "eslint-plugin-prettier",
          "eslint-plugin-import",
        ], {"save-dev": true});
    }

    eslintConfig() {
        this.fs.copy(this.templatePath('./.eslintrc.js'), this.destinationPath('.eslintrc.js'));
    }
}