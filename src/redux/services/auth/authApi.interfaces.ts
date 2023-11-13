import { IUser } from "../../../interfaces/user.interfaces";

export interface ILoginResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    user: IUser;
    accessToken: string;
  };
}

export interface IRegisterResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: object;
}

export interface IRegisterPayload {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNumber?: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
  remember?: boolean;
}

export interface ILogOutResponse {}
