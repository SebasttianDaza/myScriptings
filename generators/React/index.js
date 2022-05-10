const Generator = require('yeoman-generator');

module.exports = class extends Generator { 
    constructor(args, opts) {
        super(args, opts);
        this.option('babel');
    }

    method1() {
        this.log('method1');
    }

    method2() {
        this.log('method2');
    }

};