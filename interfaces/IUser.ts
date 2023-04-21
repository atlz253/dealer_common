import IBaseUser from "./IBaseUser";

interface IUser extends IBaseUser {
    birthday: string,
    password: string
}

export default IUser;