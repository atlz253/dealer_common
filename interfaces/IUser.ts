import IBaseUser from "./IBaseUser";

interface IUser extends IBaseUser {
    birthday: string | null,
    password: string
}

export default IUser;