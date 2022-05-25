class Basket {
    constructor() {
        this.items = [];
        this.totalValue = 0;
    }

    add(item) {
        this.items.push(item);
    }
    getTotalValue() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0);
    }
    showBasket() {
        this.items
            .map((product, i) => `${i+1} - ${product.name} - ${product.price.toFixed(2)}zł`)
            .forEach(text => console.log(text));
    }
    remove(no) {
        this.items.splice(no-1,1)
    }
}


class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }
}

const shopBasket = new Basket();
const oranges = new Product('orange', 5.00);
const cucumbers = new Product('cucumber', 8.34);
const apples = new Product('apple', 3.40);

shopBasket.add(cucumbers);
shopBasket.add(oranges);
shopBasket.add(apples);

console.log(shopBasket.getTotalValue());
shopBasket.showBasket();

