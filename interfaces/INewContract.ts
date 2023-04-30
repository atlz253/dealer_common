import ID from "./ID";
import IProductQuantity from "./IProductQuantity";

interface INewContract extends ID {
    sellerBillID: number,
    buyerBillID: number,
    products: IProductQuantity[]
}

export default INewContract;