console.log('= sass.js =')

const YOUR_CSS = /* sass */`
	$color: red

	body
		color: $color
`

// Code below copied verbatim from URL below,
// but with added then() & catch() after process() call,
// as well as empty string as value for path options:
// https://github.com/csstools/postcss-sass?tab=readme-ov-file#postcss

const postcss = require('postcss');
const postcssSass = require('@csstools/postcss-sass');

postcss([
  postcssSass(/* pluginOptions */)
]).process(YOUR_CSS, {
	from: '', // Added option to make PostCSS stop complaining
	to: '', // Added option to make PostCSS stop complaining
  syntax: require('postcss-scss')
})
	.then(result => { console.log(result.css) })
	.catch(console.error);
