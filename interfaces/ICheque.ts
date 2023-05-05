import ID from "./ID";

interface ICheque extends ID {
    contractID: number,
    deliveryDate: string
}

export default ICheque;