var orm = require("../config/orm.js");

var burger = {
    selectall: function(cb) {
      orm.selectall("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertone: function(cols, vals, cb) {
      orm.insertone("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateone: function(objColVals, condition, cb) {
      orm.updateone("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    
};
  
  
  module.exports = burger;
  