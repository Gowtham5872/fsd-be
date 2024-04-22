const express = require('express');
const fs = require('fs');
const { join } = require('path');
const app = express();
const folderPath = join(__dirname, 'files'); 
app.use(express.json());
app.post('/createFile', (req, res) => {
    const timestamp = new Date().toISOString();
    const filename = `${timestamp}.txt`;
    const filePath = join(folderPath, filename);
    const content = timestamp;

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creating file');
        } else {
            console.log('File created:', filename);
            res.send('File created successfully');
        }
    });
});
app.get('/files', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading files');
        } else {
            res.send(files);
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});




