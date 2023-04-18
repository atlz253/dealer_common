import ID from "./ID";

interface IBaseContract extends ID {
    seller: string,
    buyer: string,
    price: number,
    date: number
}

export default IBaseContract;