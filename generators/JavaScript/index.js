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

        if(answers.ESLint) {
            if(answers.ESLint === 'JavaScript Vanilla') {
                this.composeWith(require.resolve('../ESLint/Vanilla'));
            }
            if(answers.ESLint === 'JavaScript-Typescript') {
                this.composeWith(require.resolve('../ESLint/Vanilla-Typescript'));
            }
        }
    }
}