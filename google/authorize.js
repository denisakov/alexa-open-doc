// authorize.js
var GoogleAuth = require('google-auth-library')

module.exports = function authorize (credentials, token, callback) {
  var clientSecret = credentials.web.client_secret
  var clientId = credentials.web.client_id
  var redirectUrl = credentials.web.redirect_uris[4]
  var auth = new GoogleAuth()
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl)
  // Check if we have previously stored a token
  oauth2Client.setCredentials({
    access_token: token,
    refresh_token: 'REFRESH TOKEN HERE'
  })
  if (token === undefined) {
    var undefinedToken = 'Token is undefined, please link the skill'
    callback(undefinedToken)
  }
  callback(null, oauth2Client)
}