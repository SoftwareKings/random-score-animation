import { Request, Response, NextFunction } from 'express';
import * as scoreService from '../services/scoreService';

export async function getScores(req: Request, res: Response, next: NextFunction) {
  try {
    const scores = await scoreService.getScores();
    res.json(scores);
  } catch (err) {
    next(err);
  }
}

export async function randomizeScores(req: Request, res: Response, next: NextFunction) {
  try {
    const newScores = await scoreService.randomizeScores();
    res.json(newScores);
  } catch (err) {
    next(err);
  }
}
