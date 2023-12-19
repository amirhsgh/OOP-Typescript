"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(manufactureDate, price, id, quantity) {
        this.manufactureDate = manufactureDate;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }
    Product.prototype.buy = function (inp) {
        if (inp === void 0) { inp = 5; }
        return (this.quantity + inp);
    };
    Product.prototype.sell = function (inp) {
        if (inp === void 0) { inp = 5; }
        if (inp > this.quantity) {
            throw Error("Invalid quantity");
        }
        return (this.quantity - inp);
    };
    return Product;
}());
var t_m = new Product(new Date(), 100, "1", 10);
console.log(t_m.buy(15));
exports.default = Product;
