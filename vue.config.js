let baseUrl = '/';
if(process.argv[2] === 'build'){
	baseUrl = './';
}
module.exports = {
    baseUrl,
    outputDir: 'app/dist',
    configureWebpack: {
        target: 'node-webkit',
        mode: 'development'
    }
};