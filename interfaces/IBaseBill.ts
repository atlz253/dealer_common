import ID from "./ID";

interface IBaseBill extends ID {
    ownerName: string,
    billNumber: string,
    bankName: string,
    expireDate: string
}

export default IBaseBill;