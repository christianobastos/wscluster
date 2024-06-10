<<<<<<< HEAD
const fs = require('fs');
const mysql = require('mysql');

class HandleDBMSMySQL {

  constructor(host=null, database=null, user=null, password=null){

    var envFile = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8', 'r'));
    if (envFile) {
      this._host      = ( typeof host      !== 'string' || host     == null ) ? envFile.host     : host;
      this._database  = ( typeof database  !== 'string' || database == null ) ? envFile.database : database;
      this._user      = ( typeof user      !== 'string' || user     == null ) ? envFile.user     : user;
      this._password  = ( typeof password  !== 'string' || password == null ) ? envFile.password : password;
      //
      this.connect();
    } else {
      console.error('Parâmetros incorretos para a classe: \`%s\`', this.constructor.name);
    }

  }



  connect() {

    this.connection = mysql.createConnection({
      host:     this._host,
      database: this._database,
      user:     this._user,
      password: this._password
    });

  }

  query(sql, args){
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          var resultsJSON = { 'metadata': {}, 'data': {} };
          resultsJSON.metadata  = fields.map((r)  => Object.assign({}, r));
          resultsJSON.data      = results.map((r) => Object.assign({}, r));
          resolve(resultsJSON);
        }
      });
    });

  }



  close(){
    return new Promise((resolve, reject) => {
        this.connection.end(err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
      });
    });

  }

}





=======
const fs = require('fs');
const mysql = require('mysql');

class HandleDBMSMySQL {

  constructor(host=null, database=null, user=null, password=null){

    var envFile = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8', 'r'));
    if (envFile) {
      this._host      = ( typeof host      !== 'string' || host     == null ) ? envFile.host     : host;
      this._database  = ( typeof database  !== 'string' || database == null ) ? envFile.database : database;
      this._user      = ( typeof user      !== 'string' || user     == null ) ? envFile.user     : user;
      this._password  = ( typeof password  !== 'string' || password == null ) ? envfile.password : password;
      //
      this.connect();
    } else {
      console.error('Parâmetros incorretos para a classe: \`%s\`', this.constructor.name);
    }

  }



  connect() {

    this.connection = mysql.createConnection({
      host:     this._host,
      database: this._database,
      user:     this._user,
      password: this._password 
    });

  }

  query(sql, args){
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          var resultsJSON = { 'metadata': {}, 'data': {} };
          resultsJSON.metadata  = fields.map((r)  => Object.assign({}, r));
          resultsJSON.data      = results.map((r) => Object.assign({}, r));
          resolve(resultsJSON);
        }
      });
    });

  }



  close(){
    return new Promise((resolve, reject) => {
        this.connection.end(err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
      });
    });

  }

}





>>>>>>> 656210592c87ec16e85ca49cb86f6eb8692e2254
module.exports = HandleDBMSMySQL;