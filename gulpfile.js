const { watch, src } = require('gulp');
const sftp = require('gulp-sftp-up4');
require('dotenv').config();

const watchFolder = './api/**/**/*';

function api(cb) {
  src(watchFolder)
    .pipe(sftp({
      host: process.env.SFTP_HOST,
      user: process.env.SFTP_USER,
      remotePath: process.env.SFTP_DIRECTORY,
      passphrase: process.env.PASSPHRASE
    }));
  cb();
}

exports.default = function () {
  watch(watchFolder, api);
}
