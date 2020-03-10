const express = require('express');
const app = express();
const port = 3000;

var downloadFolder = "C:/Users/admin/Downloads/";
var files = {
	java: "jdk-8u231-windows-x64.exe",
	eclipse: "eclipse-jee-2019-12-R-win32-x86_64.zip",
	tomcat: "apache-tomcat-9.0.30-windows-x64.zip",
	//mysql: "mysql-installer-community-8.0.18.0.msi",
	oracle: "OracleXE184_Win64.zip"

};



app.get('/', (req, res) => {
	var body = '<body><ul>';
	for (let name in files) {
		body += `<li><a href="${name}">${name}</a></li>`;
	}
	body += '</ul></body>';
	res.send(body);
});

for (let [key, value] of Object.entries(files)) {
	app.get(`/${key}`, function (req, res) {
		const file = downloadFolder + value;
		res.download(file);
	});
};
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
