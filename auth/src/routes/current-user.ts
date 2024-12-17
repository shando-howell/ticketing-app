import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('Server online, k8s cluster online....');
});

export { router as currentUserRouter };