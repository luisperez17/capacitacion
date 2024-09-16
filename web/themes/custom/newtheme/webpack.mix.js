let mix = require('laravel-mix');

mix
.disableSuccessNotifications()
.postCss('./src/tw-styles.css', 'build', [
  require('tailwindcss'),
  require('autoprefixer'),
]);
