export interface ILoginRequest {
  email: string,
  password: string,
}
export interface ILoginRequestWrapped {
  user: ILoginRequest
}
