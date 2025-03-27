export interface CreatedUserDto {
  sucess: boolean;
  data: {
    id: string;
    email: string;
    name: string;
    gender: string;
    createdAt: string;
    phoneNumber?:string;
    age: number;
  };
}
export interface LoginUserDto {
  sucess: boolean;
  data: {
    token: string;
    id: string;
  };
}
export interface AllUsersDTO {
  success: boolean;
  data: {
    id: string
    email: string;
    name: string;
    gender: string;
    createdAt: string;
    description?:string
  }[];
}
