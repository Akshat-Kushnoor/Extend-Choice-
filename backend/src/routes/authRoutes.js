import express from 'express';
import { 
  verifyToken, 
  getUserProfile, 
  updateProfile 
} from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/verify', verifyToken);
router.get('/profile', authenticateToken, getUserProfile);
router.put('/profile', authenticateToken, updateProfile);

export default router;