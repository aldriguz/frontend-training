const app = require('http').createServer( (req, res) => res.send('oh hi there'));

const DATABASE_URL = process.env.DATABASE_URL;

app.listen(5000, () => {
	console.log('Server Url -> ' + DATABASE_URL);
});