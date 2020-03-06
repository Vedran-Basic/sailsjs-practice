let jwt = require('jsonwebtoken')
module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    success: {
      responseType: 'ok',
      description: 'okeydokey!'
    },
    doesnexist:{
      responseType: 'notFound',
      description: 'Email is used!'
    },
  },


  fn: async function (inputs, exits) {
    const {email, password} = inputs;

    let newUser;
    try {
      newUser = await User.findOne({email,password})
      if(!newUser){
        console.log(newUser)
        return exits.doesnexist();
      }



      let user={
        email,
        password
      }
      jwt.sign({user}, 'secretkey', (err, token) => {
        return exits.success({user, token})
      });


    }
      catch (e) {
      return e;
      // All done.
    }
  }

};
