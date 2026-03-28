// Create web server
const express = require('express');
const app = express();
const router = express.Router();
const CommentController = require('./controller/commentController');

// Handle Requests
router.get('/comments', CommentController.getComments);
router.post('/comments', CommentController.addComment);

app.use(express.json());
app.use('/', router);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

