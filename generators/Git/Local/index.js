const Generator = require('yeoman-generator');
const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

module.exports = class extends Generator {
    async prompting() {
        const answers = await askName({
            type: 'boolean',
            name: 'appname',
            message: 'Is here your project?',
            default: true 
        })

        this.appname = answers.appname;
    }

    writing() {
        if(this.appname) {
            //Iniciar un git init
            this.spawnCommandSync('git', ['init']);
            this.spawnCommandSync('git', ['add', '.']);
            this.spawnCommandSync('git', ['commit', '-m', '"Initial commit"']);
        } 
    }

    async questions() {
        if(!this.appname) {
            const answers = await askName({
                type: 'input',
                name: 'directory',
                message: 'What is your project name?',
                default: 'my-project'
            })

            this.appnameChange = answers.directory;
        }
    }

    changeDirectory() {
        this.destinationRoot(this.appnameChange);
        this.spawnCommandSync("git", ["init"]);
        this.spawnCommandSync("git", ["add", "."]);
        this.spawnCommandSync("git", ["commit", "-m", '"Initial commit"']);
    }
}


    