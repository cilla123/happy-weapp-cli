const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const shelljs = require('shelljs');
const lodash = require('lodash');

module.exports = {

    getProjectRoot() {
        return process.cwd();
    },

    // 获取根目录
    getRootPath() {
        return path.resolve(__dirname, '../../');
    },

    // 获取 package.json 文件
    getPkgInfo() {
        let result = {};
        try {
            result = JSON.parse(fs.readFileSync(path.join(this.getRootPath(), 'package.json')));
        } catch (e) {
            console.log(chalk.red('读取 package.json 出错！'));
        }
        return result;
    },

};
