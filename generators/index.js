const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        const answers = await this.prompt([
            {
                type: 'list',
                name: 'generator',
                message: 'What would you like to generate?',
                choices: [
                    {
                        name: 'React',
                    },
                    {
                        name: 'JavaScript Vanilla',
                    },
                    {
                        name: 'Vue',
                    }
                ]
            }
        ]);

        if (answers.generator === 'React') {
            this.composeWith(require.resolve('./React'));
        }

        if (answers.generator === 'JavaScript Vanilla') {
            this.composeWith(require.resolve('./JavaScript'));
        }

        if (answers.generator === 'Vue') {
            this.composeWith(require.resolve('./Vue'));
        }
    }
}