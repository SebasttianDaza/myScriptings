const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    installDependencies() {
        this.npmInstall([
                "prettier",
                "eslint",
                "eslint-config-prettier",
                "eslint-plugin-import",
                "eslint-plugin-prettier",
                "@typescript-eslint/parser",
                "@typescript-eslint/eslint-plugin",
                "eslint-plugin-vue",
            ],
            {"save-dev": true}
        );
    }

    eslint() {
        this.fs.copy(this.templatePath('../ESLint/Vue/templates/eslintrc.js'), this.destinationPath('.eslintrc.js'));
    }
}