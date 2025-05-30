export interface User {
  id: string;
  username: string;
  // stored as bcrypt hash
  password: string;
}
