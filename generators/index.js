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
            },
            {
                type: 'confirm',
                name: 'initialRepo',
                message: 'Would you like to initialize a repository?',
                default: true
            },
            {
                type: 'list',
                name: "createRepoRemote",
                message: 'Would you like to create a new repository with?',
                choices: [
                    {
                        name: 'GitHub',
                    },
                    {
                        name: 'GitLab',
                    },
                    {
                        name: 'BitBucket',
                    }
                ]
            }
        ]);

        //Create config about the Framework

        if (answers.generator === 'React') {
            this.composeWith(require.resolve('./React'));
        }

        if (answers.generator === 'JavaScript Vanilla') {
            this.composeWith(require.resolve('./JavaScript'));
        }

        if (answers.generator === 'Vue') {
            this.composeWith(require.resolve('./Vue'));
        }

        //Create repo local

        if (answers.initialRepo) {
            this.composeWith(require.resolve('./Git/Local'));
        }

        //Create repo remote
        
        if (answers.createRepoRemote) {
            if (answers.createRepoRemote === 'GitHub') {
                this.composeWith(require.resolve('./Git/Remote/GitHub'));
            }
            if (answers.createRepoRemote === 'GitLab') {
                this.composeWith(require.resolve('./Git/Remote/GitLab'));
            }
            if (answers.createRepoRemote === 'BitBucket') {
                this.composeWith(require.resolve('./Git/Remote/BitBucket'));
            }
        }
    }
}