import { Product } from "../models/Product.js"

describe("Product", () => {
    describe("Test the existence of the parameters of the class Product ", () => {

        it("verificar se instancia de Product é feita corretamente", () => {
            const product = new Product();
            expect(product instanceof Product).toBe(true);
            
            // remover da lista de instâncias
            product.destroy()
        
        });
        it ("should success if the nameProduct parameter exists", () => {
            const product = new Product();
            product.nameProduct = "Vestido Longo"
            const result = product.nameProduct
            expect(result).toEqual("Vestido Longo");
        });
        it ("should success if the typeProduct parameter exists", () => {
            const product =  new Product()
            product.typeProduct = "Vestido"
            const result = product.typeProduct;
            expect(result).toEqual("Vestido");
        });

        it ("should success if the description parameter exists", () => {
            const product =  new Product()
            product.description = "Vestido de viscose, vermelho longo"
            const result = product.description;
            expect(result).toEqual("Vestido de viscose, vermelho longo");
        });

        it ("should success if the pointsProduct parameter exists", () => {
            const product =  new Product()
            product.pointsProduct = 50
            const result = product.pointsProduct;
            expect(result).toEqual(50);
        });
    });
})

