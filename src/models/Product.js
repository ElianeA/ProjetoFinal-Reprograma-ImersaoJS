export class Product {
    id = Math.floor(Date.now() * Math.random()).toString(36)
    nameProduct;
    typeProduct;
    description;
    pointsProduct;
    

    constructor(nameProduct, typeProduct, description, pointsProduct ) {

        this.nameProduct = nameProduct;
        this.typeProduct = typeProduct;
        this.description = description;
        this.pointsProduct = pointsProduct;

        Product.productList.push(this);
    }   

    static productList = [];
    
    destroy() {
        let i = Product.productList.indexOf(this);
        Product.productList.splice(i, 1);
    };
}