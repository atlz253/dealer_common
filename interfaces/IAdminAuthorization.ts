import IAdmin from "./IAdmin";
import IAuthorization from "./IAuthorization";

interface IAdminAuthorization extends IAdmin, IAuthorization {
}

export default IAdminAuthorization;