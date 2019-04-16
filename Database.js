'use strict';
const config = require("./config").database;
const isNull = require('./script').isNull;
const sql = require('mssql');

module.exports = {
	query: async (queryString) => {
        return new Promise((resolve, reject) => {
            if(isNull(queryString)){
                return reject({
                    message: "queryString is required!",
                });
            }

            console.log('Establishing connection to Database...')
            try{
                const pool = await sql.connect(config);
                console.log('Connected to Database!');
                const res = await pool.request().query(queryString);
                console.log('Query succeded!');
                return resolve(res);
            }
            catch(err){
                console.log(`Error executing query`);
                return reject(err);
            }
        });
    }
};
