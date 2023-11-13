export enum ENUM_USER_ROLE {
  SUPER_ADMIN = "superadmin",
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  ID?: string;
  contactNumber?: string;
  createdAt: string;
  companyName?: string;
  email: string;
  firstName: string;
  lastName: string;
  role: ENUM_USER_ROLE;
  updatedAt: string;
}
