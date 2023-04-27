import ID from "./ID";

interface IAdmin extends ID {
    firstName: string,
    login?: string,
    password?: string
}

export default IAdmin;