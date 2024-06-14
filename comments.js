// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

// Use body-parser to parse request body
app.use(bodyParser.json());

// Read comments from file
function readComments() {
    try {
        const comments = fs.readFileSync('comments.json');
        return JSON.parse(comments);
    } catch (err) {
        return [];
    }
}

// Write comments to file
function writeComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}

// Get all comments
app.get('/comments', (req, res) => {
    res.json(readComments());
});

// Add a new comment
app.post('/comments', (req, res) => {
    const comments = readComments();
    comments.push(req.body);
    writeComments(comments);
    res.json(req.body);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});