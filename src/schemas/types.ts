export interface CreatedUserDto {
    sucess: boolean;
    data: {
        email: string;
        name: string;
    }
}
export interface LoginUserDto {
    sucess: boolean;
    data: {
        token:string,
        id:string
    }
}