let user, password,host,database;

user = process.env.DB_USER;
password = process.env.DB_PASSWORD;
host = process.env.DB_HOST;
database = process.env.DB_DATABASE;

module.exports = {
  user : user,
  password: password,
  host: host,
  database: database
}