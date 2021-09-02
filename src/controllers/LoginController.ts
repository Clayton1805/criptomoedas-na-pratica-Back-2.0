import { Router } from 'express';
import rescue from 'express-rescue';
import { loginService } from '../services/loginService';

const LoginController = Router();

LoginController.post('/', rescue(loginService.create));

export default LoginController;
