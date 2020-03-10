// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '123',
      database : 'sailsdb'
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'sailsdb',
      user:     'root',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },

  },

  production: {
    client: 'mysql',
    connection: {
      database: 'sailsdb',
      user:     'root',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
