import ID from "./ID";

interface IBaseClient extends ID {
    name: string,
    phone: string,
    added: string
}

export default IBaseClient;