const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/slui-app/runtime-es2015.js',
        './dist/slui-app/polyfills-es2015.js',
        './dist/slui-app/runtime-es2015.js',
        './dist/slui-app/scripts.js',
        './dist/slui-app/main-es2015.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/slui.js');
    await fs.copyFile('./dist/slui-app/styles.css', 'elements/styles.css')
    await fs.copy('./dist/slui-app/assets/', 'elements/assets/' )
    
})()