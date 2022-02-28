const db = require('../db')  //from index
const User = require('../models/users')

db.on('error',console.error.bind(console,'Mongo connection error'))

const main = async () => {
    const users = [
      { name: 'Benny', age: 28, status: 'active' },
      { name: 'Claire', age: 28, status: 'active' },
      { name: 'Joey', age: 28, status: 'active' },
      { name: 'Abe', age: 22, status: 'pending' },
      { name: 'Sunny', age: 23, status: 'pending' },
      { name: 'Lizzy', age: 28, status: 'active' },
      { name: 'Julie', age: 21, status: 'active' }
    ]
    //User is schema from users.js
    await User.insertMany(users)
    console.log("Created users!")
  }
  
  const run = async () => {
    await main()
    db.close()
  }
  run()