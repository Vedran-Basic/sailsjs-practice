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
  'POST /posts/create': { action: 'post/create' },
  'DELETE /posts/delete': { action: 'post/delete' },
  'GET /posts/get': { action: 'post/get' },
  'PATCH /posts/update': { action: 'post/update' },

  'POST /user/signup': { action: 'user/signup' }

};
