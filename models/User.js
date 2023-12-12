const knexconfig = require("../knexfile");
const knex = require("knex")(knexconfig.development);

const db = knex;

module.exports={
    registeruser: async (username, email, password) => {
        try {
            const result = await db('user_tbl').insert(
                 username,
                 email,
                 password
              );
              console.log(result); 
              return result; 
        } catch (error) {
          console.error(error);
          // Handle the error, e.g., return a specific response or throw a custom error
          throw new Error("Error registering user");
        }
      }
      ,
    
    loginuser: async (username) => {
        try {
            const result= await db('user_tbl').where({ username: username }).select('*');
              return result; 
        } catch (error) {
          console.error(error);
          // Handle the error, e.g., return a specific response or throw a custom error
          throw new Error("Error registering user");
        }
        
      }
      
    // getUserByUsername: async(username) =>{
    //     return db('user_tbl').select({username:username})

    // }
}