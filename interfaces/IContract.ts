import IBaseContract from "./IBaseContract";
import IBaseProduct from "./IBaseProduct";
import IBill from "./IBill";
import IStatus from "./IStatus";

interface IContract extends IBaseContract, IStatus {
    sellerBill: IBill,
    buyerBill: IBill,
    products: IBaseProduct[]
}

export default IContract;