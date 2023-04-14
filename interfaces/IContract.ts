import IBaseContract from "./IBaseContract";
import IBaseProduct from "./IBaseProduct";
import IBill from "./IBill";

interface IContract extends IBaseContract {
    sellerBill: IBill,
    buyerBill: IBill,
    products: IBaseProduct[]
}

export default IContract;