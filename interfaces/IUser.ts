import IBaseUser from "./IBaseUser";

export enum UserRoles {
    diler,
    admin
}

interface IUser extends IBaseUser {
    role: UserRoles
}

export default IUser;