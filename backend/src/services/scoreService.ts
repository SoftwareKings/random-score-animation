import fs from 'fs/promises';
import path from 'path';
import { Score } from '../models/score';

const dataFile = path.join(process.cwd(), 'scores.json');

export async function getScores(): Promise<Score> {
  const raw = await fs.readFile(dataFile, 'utf-8');
  return JSON.parse(raw) as Score;
}

export async function randomizeScores(): Promise<Score> {
  const newScores: Score = {
    yourScore: Math.floor(Math.random() * 101),
    average:   Math.floor(Math.random() * 101),
    target:    Math.floor(Math.random() * 101),
  };
  await fs.writeFile(dataFile, JSON.stringify(newScores, null, 2));
  return newScores;
}