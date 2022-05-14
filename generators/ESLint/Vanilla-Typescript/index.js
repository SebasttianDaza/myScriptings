const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    installDependencies() {
        this.log('We still have this generator, but it is not used anymore.');
    }
}