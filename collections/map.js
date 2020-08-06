var async = require('async');
var { doulbeAsync } = require('../common.js');

module.exports ={
  runMap() {
    console.log("----------Map Example----------");
    console.time('test')
    async.map([1,2,3,4,5], doulbeAsync, (err, res) => {
      debugger;
      if(err) return console.error(err);
      console.log(res);
      console.timeEnd('test');
    });
  }
}