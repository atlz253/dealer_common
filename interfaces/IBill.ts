import IBaseBill from "./IBaseBill";

interface IBill extends IBaseBill {
    correspondentBill: string,
    ownerType?: string,
    BIC: string,
    INN: string
}

export default IBill;