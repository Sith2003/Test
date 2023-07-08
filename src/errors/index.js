const CustomAPIError = require('./custom-api')
const UnauthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not-found')
const BadrequestError = require('./bad-request')

module.exports = {
    CustomAPIError,
    BadrequestError,
    NotFoundError,
    UnauthenticatedError
}