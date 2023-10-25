interface userProFile {
  username: string;
  email: string;
}

// #1
interface userProFileUpdate {
  username?: string;
  email?: string;
}

// #2
type userProFileUpdate1 = {
  usernmae?: userProFile['username'];
  email?: userProFile['email'];
}

// #3
type userProFileUpdate2 = {
  [P in 'username' | 'email']?: userProFile[P]
}

// #4
type userProFileUpdate4 = {
  [T in keyof userProFile]?: userProFile[T];
}

// #5
type Partials<T> = {
  [P in keyof T]?: T[P];
}