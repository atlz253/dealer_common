import IBaseContract from "./IBaseContract";
import IBaseProduct from "./IBaseProduct";
import IBill from "./IBill";
import ICheque from "./ICheque";
import IStatus from "./IStatus";

interface IContract extends IBaseContract, IStatus {
    sellerBill: IBill,
    buyerBill: IBill,
    cheques: ICheque[],
    products: IBaseProduct[]
}

export default IContract;