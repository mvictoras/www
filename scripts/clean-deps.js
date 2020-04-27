var shell = require('shelljs');

// Clean assets vendor dirs
shell.rm('-rf', 'themes/default/assets/js/vendor');
shell.rm('-rf', 'themes/default/assets/css/vendor');
shell.rm('-rf', 'themes/default/assets/scss/vendor');
shell.rm('-rf', 'themes/default/assets/vendor');
