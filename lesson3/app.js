
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

connection.connect(function (error){
   if(error){
   console.error(error)
   }
   else{
   console.log(true)
   }
});
function conn(){
    return Promise(
    function(resolve,reject){
        return connection.connect(function (error){
            if(error){
                reject(error)
            }
            else{
                resolve(true);
            }
        })
    
    }
    );
}
conn().then(
    function(response){
        console.log(response,'res')
    }
)
.catch(
    function(error){
        console.error(error,'error')
    }
)