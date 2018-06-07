let baseUrl = '/';
if(process.argv[2] === 'build'){
	baseUrl = './';
}
module.exports = {
    baseUrl
};