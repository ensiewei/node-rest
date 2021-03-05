module.exports = function (code, message) {
    this.code = code || 'internal: unknow_error',
    this.message = message || 'Please contact the system administrator'
}