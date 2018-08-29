#!/usr/bin/env node

var analyze = require('../analyze.js');
var program = require('commander');

program
  .version(require('../package.json').version)
  .option('--exclude [items]', '不需要合并package.json的文件夹', function(val) {
    return val.split(',');
  })
  .option('--tabSize', 'package.json文件的tabSize大小(默认为2)', '2')
  .parse(process.argv);

analyze(program);
