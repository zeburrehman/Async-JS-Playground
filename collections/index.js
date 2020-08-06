var async = require('async');
var { runMap } = require('./map.js');
var { concatResult } = require('./concat.js');

module.exports = {
  run(){
      async.series([concatResult, runMap], (err, res) => {
      console.log("Series Functions completed successfully");
    });
  }
}