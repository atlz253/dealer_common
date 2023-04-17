import IBaseUser from "./IBaseUser";

export const enum UserRoles {
    diler,
    admin
}

interface IUser extends IBaseUser {
    role: UserRoles
}

export default IUser;