// import express
import express from "express";
import {addLeaderboard, getLeaderboards} from "../controllers/leaderboard.js";
 
// init express router
const router = express.Router();
 
// Home route
router.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});
 
// About route
router.get('/leaderboard', getLeaderboards);
router.post('/leaderboard', addLeaderboard);
 
// Contact route
router.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
});
 
// export default router
export default router;