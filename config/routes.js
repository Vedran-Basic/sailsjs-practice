/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /posts/get': { action: 'post/getallposts' },
  'GET /posts/search': { action: 'post/search' },


  'POST /post/create': { action: 'post/create' },
  'DELETE /post/delete': { action: 'post/delete' },
  'PATCH /post/update': { action: 'post/update' },
  'GET /post/get/:id': { action: 'post/get' },


  'POST /user/signup': { action: 'user/signup' },
  'POST /user/login': { action: 'user/login' }


};
