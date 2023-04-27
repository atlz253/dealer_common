import IAuthorization from "./IAuthorization";
import ID from "./ID";

interface IDealer extends ID {
    firstName: string,
    employmentDate: string,
    authorization?: IAuthorization
}

export default IDealer;