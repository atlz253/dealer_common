import ID from "./ID";

interface IBaseContract extends ID {
    sellerName?: string,
    buyerName?: string,
    price: number,
    created: string,
    type: string
}

export default IBaseContract;