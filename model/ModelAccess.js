<<<<<<< HEAD
const fs = require("fs");
const HandleDBMSMySQL = require("../config/database/HandleDBMSMySQL");
class ModelAccess {
    constructor() {
        this._HandleDBMSMySQL = new HandleDBMSMySQL();
        var envFile = JSON.parse(
            fs.readFileSync("./config/server/env.json", "utf8", "r")
        );
    }
    destroy(param = null) {
        var varToString = (varObj) => Object.keys(varObj)[0];
        new Error(
            "Parâmetros incorretos para a classe: `%s`, parâmetro `%s`",
            this.constructor.name,
            varToString({ param })
        );
    }
    getAccess(limit=0, offset=0) {

            var envFile = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8', 'r'));
        
            var _limit  = limit;
            var _offset = offset;
        
            var sql = ``;
        
            if ( ( _limit === null ) && ( _offset === null) ) {
              sql = `select * from ` + envFile.database + `.access order by idaccess desc`;
            } else if ( ( typeof _limit === 'number' && _limit >= 0 ) && ( typeof _offset === 'number' && _offset >= 1 ) ) {
              sql = `select * from ` + envFile.database + `.access order by idaccess desc limit ` + _limit + `, ` + _offset;
            } else {
              console.error('Parâmetros incorretos para a classe: \`%s\`', this.constructor.name);
            }
            return this._HandleDBMSMySQL.query(sql);
        
          }
    }
    postAccess(timestamp = null, hostname = null, ip = null); {
        this._timestamp =
            typeof timestamp !== "string" || timestamp === null
                ? this.destroy(timestamp)
                : timestamp;
        this._hostname =
            typeof hostname !== "string" || hostname === null
                ? this.destroy(hostname)
                : hostname;
        this._ip =
            typeof ip !== "string" || ip === null ? this.destroy(ip) : ip;
        var table = "access";
        var sqlInsert = `insert into ${envFile.database}.${table} values (null, $
{this._timestamp}, ${this._hostname}, ${this._ip})`;
        this._HandleDBMSMySQL.query(sqlInsert);
        //
        this._HandleDBMSMySQL.close();
    }

module.exports = ModelAccess;
=======
const fs = require('fs');
const HandleDBMSMySQL = require('../config/database/HandleDBMSMySQL');
class ModelAccess {
 constructor() {
 this._HandleDBMSMySQL = new HandleDBMSMySQL();
 var envFile = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8',
'r'));
 }
 destroy(param=null) {
 var varToString = varObj => Object.keys(varObj)[0];
 new Error('Parâmetros incorretos para a classe: \`%s\`, parâmetro \`%s\`',
this.constructor.name, varToString({param}));
 }
 postAccess(timestamp=null, hostname=null, ip=null) {
 this._timestamp = ( typeof timestamp !== 'string' || timestamp === null ) ?
this.destroy(timestamp) : timestamp;
 this._hostname = ( typeof hostname !== 'string' || hostname === null ) ?
this.destroy(hostname) : hostname;
 this._ip = ( typeof ip !== 'string' || ip === null ) ?
this.destroy(ip) : ip;
 var table = 'access';
 var sqlInsert = `insert into ${envFile.database}.${table} values (null, $
{this._timestamp}, ${this._hostname}, ${this._ip})`;
 this._HandleDBMSMySQL.query(sqlInsert);
 //
 this._HandleDBMSMySQL.close();
 }
}
module.exports = ModelAccess;
>>>>>>> 656210592c87ec16e85ca49cb86f6eb8692e2254
