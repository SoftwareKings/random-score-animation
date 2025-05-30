import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';

const USERS_FILE = path.join(process.cwd(), 'users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'CHANGE_THIS_SECRET';

// read/write helpers
async function readUsers(): Promise<User[]> {
  const raw = await fs.readFile(USERS_FILE, 'utf-8');
  return JSON.parse(raw);
}
async function writeUsers(users: User[]) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function signup(username: string, pwd: string): Promise<Omit<User, 'password'>> {
  const users = await readUsers();
  if (users.some(u => u.username === username)) {
    throw new Error('Username taken');
  }
  const hash = await bcrypt.hash(pwd, 10);
  const newUser: User = { id: Date.now().toString(), username, password: hash };
  users.push(newUser);
  await writeUsers(users);
  return { id: newUser.id, username };
}

export async function login(username: string, pwd: string): Promise<string> {
  const users = await readUsers();
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(pwd, user.password))) {
    throw new Error('Invalid credentials');
  }
  // issue JWT with user id + username
  return jwt.sign({ sub: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
}
