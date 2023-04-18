import ID from "./ID";

interface IBaseProduct extends ID {
    name: string,
    category: string,
    manufacturer: string,
    quantity: number,
    price: number
}

export default IBaseProduct;