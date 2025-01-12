import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('Signup route');
});
router.post('/login', (req, res) => {
    res.send('login route');
});
router.post('/logout', (req, res) => {
    res.send('logout route');
});
router.post('/refresh', (req, res) => {
    res.send('refresh route');
})

export default router;
