const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle all routes by serving index.html for client-side routing
app.get('*', (req, res) => {
    // If the request is for a specific HTML file, serve it
    if (req.path.endsWith('.html')) {
        res.sendFile(path.join(__dirname, req.path));
    } else if (req.path === '/') {
        // Serve index.html for the root path
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        // For other paths, try to serve the file or fallback to index.html
        const filePath = path.join(__dirname, req.path);
        res.sendFile(filePath, (err) => {
            if (err) {
                res.sendFile(path.join(__dirname, 'index.html'));
            }
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Komplexáci website is running on http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🎮 Gaming clan website is ready!`);
});
