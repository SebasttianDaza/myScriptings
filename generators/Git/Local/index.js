const Generator = require('yeoman-generator');
const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

module.exports = class extends Generator {
    async initialCommand() {
        this.log('Welcome to the Yo Git');
        await env.lookup();
        await env.run('git', {skipInstall: true}).then(() => {
            console.log('done');
        }).catch(error => {
            console.log(`error: ${error}`);
        });
    }
}


    