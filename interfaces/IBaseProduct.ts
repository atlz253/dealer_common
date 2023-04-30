import IProductQuantity from "./IProductQuantity";

interface IBaseProduct extends IProductQuantity {
    name: string,
    category: string,
    price: number
}

export default IBaseProduct;