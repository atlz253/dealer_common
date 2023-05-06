import IProductQuantity from "./IProductQuantity";

interface IBaseProduct extends IProductQuantity {
    name: string,
    category: string,
    price: number,
    deliveryDate?: string
}

export default IBaseProduct;