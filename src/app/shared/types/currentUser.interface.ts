export interface ICurrentUser {
  id: number,
  email: string,
  username: string,
  createdAt: string,
  updatedAt: string,

  token: string;

  bio?: string,
  image?: string,
}
