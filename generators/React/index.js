const Generator = require('yeoman-generator');

module.exports = class extends Generator { 
    constructor(args, opts) {
        super(args, opts);
        this.option('babel');
    }

    async prompting() {
        const answers = await this.prompt([
            {
                type: 'list',
                name: 'eslint',
                message: 'What more would you like to add?',
                choices: [
                    {
                        name : 'React',
                        checked: true
                    },
                    {
                        name : 'React-Typescript',
                    },
                    {
                        name: 'React-Typescript-Next',
                    },
                    {
                        name: 'React-Next',
                    }
                ]
            }, {
                type: 'checkbox',
                name: 'features',
                message: 'What more would you like to add?',
                choices: [
                    {
                        name: 'Axios',
                    },
                    {
                        name: 'Redux',
                    },
                    {
                        name: 'Bootstrap && React-Bootstrap',
                    },
                ]
            }
        ]);

        if(answers.eslint) {

            if(answers.eslint.includes('React')) {
                this.composeWith(require.resolve('../ESLint/React'));
            }

            if(answers.eslint.includes('React-Typescript')) {
                this.composeWith(require.resolve('../ESLint/React-Typescript'));
            }

            if(answers.eslint.includes('React-Typescript-Next')) {
                this.composeWith(require.resolve('../ESLint/React-Typescript-Next'));
            }

            if(answers.eslint.includes('React-Next')) {
                this.composeWith(require.resolve('../ESLint/React-Next'));
            }
        }
    }

};