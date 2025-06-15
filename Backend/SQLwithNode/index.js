
const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

q = "SHOW TABLES"
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'alpha',
  password: 'Abhishek82@'
});

try{
  connection.query(q, (err, result) => {
    if(err)throw err;
    console.log(result);
  });
}catch (err){
  console.log(err);
}

connection.end();
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    // avatar: faker.image.avatar(),
    password: faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  };
}
//console.log(getRandomUser());


