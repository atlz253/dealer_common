import IContractProduct from "./IContractProduct";
import ID from "./ID";

interface INewContract extends ID {
    sellerBillID: number,
    buyerBillID: number,
    products: IContractProduct[]
}

export default INewContract;