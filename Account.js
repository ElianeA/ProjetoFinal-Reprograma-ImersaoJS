import { Person } from "./Person.js";
import { passwordCheck, emailVerification, dateBirthValidation } from "../utils/validation.js";
import { Product } from "./Product.js";

export class Account  extends Person {
    id = Math.floor(Date.now() * Math.random()).toString(36)
    nikeName;
    email;
    #password;
    qtdProduct = 0;

    static accountList = [];

    constructor(nikeName, email, password) {
        super()

        this.nikeName = nikeName;
        this.email = email;
        this.#password = password

        Account.accountList.push(this);

    }

    destroy() {
        let i = Account.accountList.indexOf(this);
        Account.accountList.splice(i, 1);
    };

    createAccount(name, phone, birthDate, nikeName, email, password) {
        if(!passwordCheck(password) || !emailVerification(email)) {
            throw new Error("Error Senha ou E-mail incorreto. Tente novamente")
        } else {
            this.name = name,
            this.phone = phone,
            this.birthDate = birthDate,
            this.nikeName = nikeName,
            this.email = email,
            this.#password = password

            return "Conta criada com sucesso"
        }
    }
/*
    #updateProduct(product, action) {
		const productIndex = Product.products.findIndex(
			(element) => element.id === product.id
		);
		if (action === 'add') {
			Product.products[productIndex].qtdClients++;
		} else if (action === 'remove') {
			Product.products[productIndex].qtdClients--;
		}
	}
    */

    hasProductInThisAccount(product) {
		return (
			this.products.find((element) => element.id === product.id) !==
			undefined
		);
	}

    addProduct(product) {
        if(product instanceof Product) {
            if(!this.hasProductInThisAccount(product)) {
				this.products.push(product);
            } else {
                throw new Error("Este cliente já possui esse produto")
            }
        } else {
            throw new Error("Informe um produto Válido")
        }
    }

    removeProduct(product) {
        if(product instanceof Product) {
            if(this.hasProductInThisAccount(product)) {
                this.products = this.products.filter(
                    (element) => element.id !==  product.id
                );
                //this.#updateProduct(product, 'add');
            } else {
                throw new Error('Produto já está removido') 
            }
        } else {
            throw new Error('Este não é um produto válido')
        }
    }
}

const account1 = new Account