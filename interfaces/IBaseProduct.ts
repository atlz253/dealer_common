import IDeliveryDays from "./IDeliveryDays";
import IProductQuantity from "./IProductQuantity";

interface IBaseProduct extends IProductQuantity, Partial<IDeliveryDays> {
    name: string,
    category: string,
    price: number,
    deliveryDate?: string
}

export default IBaseProduct;