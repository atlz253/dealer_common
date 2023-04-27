import ID from "./ID";

interface IDealer extends ID {
    firstName: string,
    employmentDate: string,
    login?: string,
    password?: string
}

export default IDealer;