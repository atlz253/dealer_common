import IBaseUser from "./IBaseUser";

interface IUser extends IBaseUser {
    birthday: Date,
    password: string
}

export default IUser;