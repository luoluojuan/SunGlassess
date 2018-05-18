let pool = require('./pool');
module.exports = {
      findAll(){
      var sql = "select * from Login";
      return pool.execute(sql);
    },
}
