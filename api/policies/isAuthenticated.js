module.exports = async function (req, res, next) {
  sails.helpers.verifyJwt.with({
    req: req,
    res: res
  })
    .switch({
      error: function (err) {
        return res.serverError(err)
      },
      invalid: function (err) {
        // if this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
        // send a 401 response letting the user agent know they need to login to
        // access this endpoint.
        if (req.wantsJSON) {
          return res.sendStatus(401)
        }
        // otherwise if this is an HTML-wanting browser, do a redirect.
        return res.sendStatus(200)
      },
      success: function () {
        // user has been attached to the req object (ie logged in) so we're set, they may proceed
        return next()
      }
    })
};
