var fs = require('fs');
var path = require('path');
var pkgJson = require(process.cwd() + '/package.json');
if (!pkgJson.dependencies) pkgJson.dependencies = {};
if (!pkgJson.devDependencies) pkgJson.devDependencies = {};

function readDirSync(rootDir, exclude){
  var pa = fs.readdirSync(rootDir);
	pa.forEach(function(ele){
    var info = fs.statSync(rootDir + '/' + ele)
		if(info.isDirectory()){
      if (exclude && exclude.indexOf(ele) > -1) {
        return;
      }
			readDirSync(rootDir + '/' + ele, exclude);
		}else{
      if (ele === 'package.json') {
        var pkg = require(rootDir + '/' + ele);
        Object.assign(pkgJson.dependencies, pkg.dependencies || {});
        Object.assign(pkgJson.devDependencies, pkg.devDependencies || {});
      }
		}
	})
}


module.exports = function (app) {
  var exclude = app.exclude;
  var root = path.join(process.cwd())

  readDirSync(root, exclude);
  fs.writeFileSync(process.cwd() + '/package.json', JSON.stringify(pkgJson, null, app.tabSize) + '\n');
}
