const Generator = require('yeoman-generator');

module.exports = class extends Generator { 
    constructor(args, opts) {
        super(args, opts);
        this.option('babel');
        this.helperMethod = () => {
            this.log('helperMethod');
        };
    }

    async prompting() {
        const answers = await this.prompt([
            {
                type: 'checkbox',
                name: 'features',
                message: 'What more would you like to add?',
                choices: [
                    {
                        name : 'React recommended',
                        checked: true
                    },
                    {
                        name : 'Eslint',
                    },
                    {
                        name: 'Prettier',
                    }
                ]
            }, 
            {
                type: 'input',
                name: 'helperMethod',
                message: 'What is your helper method name?',
                default: 'helperMethod'
            }
        ])


        if (answers.features.includes('Eslint') && answers.features.includes('Prettier')) {
            this.composeWith(require.resolve('../ESLint/React'));
        }
    };

};