import IResponse from "./IResponse";
import IAuth from "./IAuth";

interface IAuthResponse extends IResponse {
    data?: IAuth
}

export default IAuthResponse;