var async = require('async');
var { doulbeAsync } = require('../common.js');

module.exports = {
  concatResult() {
    console.log("----------Concat Example----------");
    async.concat([1,2,3,4,5], doulbeAsync, (err, res) => {
      if(err) return console.log(err);
      console.log(res);
    });
  }
}