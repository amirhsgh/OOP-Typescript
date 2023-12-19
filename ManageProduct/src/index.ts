
class Product {

    manufactureDate:Date;
    price:number;
    readonly id: string;
    quantity:number;
    expireDate?:Date;
    isPrime?:boolean;

    constructor(manufactureDate:Date, price:number, id:string, quantity:number) {
        this.manufactureDate = manufactureDate;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }


    buy(inp:number = 5) {
        this.quantity += inp
        this.quantity
    }

    sell (inp:number = 5) {
        if (inp > this.quantity) {
            throw Error("Invalid quantity")
        }
        this.quantity -= inp
        this.quantity
    }
}


export default Product;