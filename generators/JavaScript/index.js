const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        const answers = await this.prompt([ 
            {
                type: 'list',
                name: 'ESLint',
                message: 'What more would you like to add?',
                choices: [
                    {
                        name: 'JavaScript Vanilla',
                    },
                    {
                        name: 'JavaScript-Typescript',
                    }
                ]
            }
        ]);

        this.ESLint = answers.ESLint;
    }

    useInfo() {
        if (this.ESLint) {
          if (this.ESLint === "JavaScript Vanilla") {
            this.composeWith(require.resolve("../ESLint/Vanilla"));
          }
          if (this.ESLint === "JavaScript-Typescript") {
            this.composeWith(require.resolve("../ESLint/Vanilla-Typescript"));
          }
        }
    }
}