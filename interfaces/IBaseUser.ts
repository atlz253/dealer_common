import ID from "./ID";

interface IBaseUser extends ID {
    name: string,
    type: string,
    login: string,
    employmentDate: string
}

export default IBaseUser;