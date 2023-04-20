import ID from "./ID";

interface IBaseUser extends ID {
    name: string,
    type: string,
    login: string,
    employmentDate: Date
}

export default IBaseUser;