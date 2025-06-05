module.exports = {
  default: [
    'features/**/*.feature',
    '--require', 'features/step-definitions/**/*.js',
    '--publish-quiet'
  ].join(' ')
};