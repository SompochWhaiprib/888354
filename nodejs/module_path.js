var path = require('path');
var filename = path.basename('workshop/node.js/basic.js');
var current_filename = path.basename(__filename);
console.log("filename : "+ filename);
console.log('current_path :'+__filename)
console.log("current_filename :"+current_filename);

var dir = path.dirname('workshop/node.js/basic.js');
var current_dir = path.dirname(__filename);
console.log("dir : "+ dir);
console.log('current_dir :'+__dirname);
console.log("current_dir2 :"+current_dir);

var join_path = path.join ('workshop','node.js','asic.js');
console.log('join_path:' + join_path);

