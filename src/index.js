const program = require('commander')

 // 定义当前版本 
 program
   .version(require('../package').version)

// 定义使用方法 
program
  .usage('<command>')

program
    .command('init')
    .description('生成新的项目')
    .alias('i')
    .action((commandName) => {
        require('./command/init.js')(commandName)
    }) 

program
    .command('*')
    .action((commandName) => {
        console.log(chalk.red(`命令 ${commandName} 不存在！`));
    });

program.parse(process.argv)

if (!program.args.length) {
    program.outputHelp()
} 