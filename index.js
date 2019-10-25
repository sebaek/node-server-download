const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<body><a href="eclipse">eclipse</a></body>'))

app.get('/eclipse', function(req, res) {
	const file = '/Users/choongang/Downloads/eclipse-java-2019-09-R-win32-x86_64.zip';
	res.download(file);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
