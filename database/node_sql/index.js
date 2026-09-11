const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
// create the connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user',
  password:"Sanjana*03"
});


let random = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.password(),
    faker.internet.email()
  ];
};

//value insert statically
let p="INSERT INTO user(id,u_name,pass,email) values ?";
let value=[123,"sanjana","sanjana@123","sanjana123@gmail.com"]

let data=[];
for(let i=0;i<15;i++)
{
   data.push(random()) ;
}
try{
    connection.query(p,[data],(err,result)=>{
    if(err)throw err;
    
    console.log(result)

})
}
catch(err)
{
    console.log(err)
}
//end the connection of node with database after running of sql query
connection.end();
