import IAuthorization from "./IAuthorization";
import ID from "./ID";

interface IAdmin extends ID {
    firstName: string,
    authorization?: IAuthorization
}

export default IAdmin;