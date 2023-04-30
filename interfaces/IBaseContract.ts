import ID from "./ID";

interface IBaseContract extends ID {
    seller: string,
    buyer: string,
    price: number,
    created: string
}

export default IBaseContract;