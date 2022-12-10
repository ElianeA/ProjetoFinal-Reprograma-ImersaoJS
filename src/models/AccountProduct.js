import { Account } from "./Account.js";
import { Product } from "./Product.js";

export class AccountProduct {
    account;
    product;

    static accountProductList = [];

    constructor(account, product) {
        if(account instanceof Account) {
            this.account = account
        } else {
            throw new Error('Pessoa invalido')
        }

        if(product instanceof Product) {
            if(account.products.includes(product)) {
                this.product = product
            } else {
                throw new Error('Este produto não pertence a lista de produtos')
            }            
        } else {
            throw new Error('Produto invalido')
        }

        AccountProduct.accountProductList.push(this);
    }

    destroy() {
        let i = AccountProduct.accountProducList.indexOf(this);
        AccountProduct.accountProducList.splice(i, 1);
    };

}