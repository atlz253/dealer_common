import ID from "./ID";

interface IBaseContract extends ID {
    seller: string,
    buyer: string,
    price: number,
    creates: string
}

export default IBaseContract;