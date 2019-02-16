let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.webpackConfig({
	module: {
		rules: [
			{
				test: /\.scss$/,
				loader: 'import-glob-loader'
			}
		]
	}
});

mix.copy('src/img', 'public_html/assets/img', false);

mix.js('src/js/main.js', 'public_html/assets/js')
	.sass('src/scss/style.scss', 'public_html/assets/css')
	.options({
        processCssUrls: false,
        extractVueStyles: true,
		postCss: [tailwindcss('./tailwind.js')]
	})
	.purgeCss({
		enabled: mix.inProduction(),
		globs: [path.join(__dirname, 'public_html/templates/**/*.html'), path.join(__dirname, 'public_html/assets/**/*.vue')],
		extensions: ['html', 'twig', 'js', 'php', 'vue']
	})
	.sourceMaps();

mix.setPublicPath('public_html/assets');
mix.setResourceRoot('assets/');

mix.browserSync({
	// Change this URL
	proxy: 'vue-craft.test',
	files: ['public_html/assets/css/{*,**/*}.css', 'public_html/assets/js/{*,**/*}.js', 'public_html/templates/{*,**/*}.+(html|twig)']
});
