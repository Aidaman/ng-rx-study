export interface IRegisterRequest {
  username: string,
  email: string,
  password: string,
}

export interface IRegisterRequestWrapped {
  user: {
    username: string,
    email: string,
    password: string,
  }
}
