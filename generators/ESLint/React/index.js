const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    installDependencies() {
        this.npmInstall(
            [
                "prettier",
                "eslint",
                "eslint-plugin-react",
                "eslint-plugin-react-hooks",
                "eslint-config-prettier",
                "eslint-plugin-prettier",
                "eslint-plugin-import",
            ],
            {"save-dev": true}
        )
    }

    eslintConfig() {
        this.fs.copy(this.templatePath('./eslint-config-sebas.js'), this.destinationPath('.eslintrc.js'));
    }
}