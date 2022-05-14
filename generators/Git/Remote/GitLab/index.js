const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    log() {
        this.log('This is a custom generator');
    }
}