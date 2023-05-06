import IDeliveryDays from "./IDeliveryDays";
import ID from "./ID";

interface IBaseProduct extends ID, Partial<IDeliveryDays> {
    name: string,
    category: string,
    price: number,
    quantity: number,
    deliveryDate?: string
}

export default IBaseProduct;