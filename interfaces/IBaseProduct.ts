import IProductQuantity from "./IProductQuantity";

interface IBaseProduct extends IProductQuantity {
    name: string,
    category: string,
    price: number,
    deliveryDate?: string,
    deliveryDays?: number
}

export default IBaseProduct;