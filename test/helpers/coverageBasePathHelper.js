
module.exports = function (path) {
  return '../../' + (process.env.APP_DIR_FOR_CODE_COVERAGE || '');
};
