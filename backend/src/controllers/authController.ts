import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/authService';

export async function signupHandler(req: Request, res: Response, next: NextFunction) {
  console.log("---- signn up....");
  const { username, password } = req.body;
  try {
    const user = await authService.signup(username, password);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function loginHandler(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  try {
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}
