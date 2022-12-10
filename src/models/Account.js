import { Event } from "./Event.js";
import { News } from "./News.js";
import { Person } from "./Person.js";
import { passwordCheck, emailVerification} from "../utils/validation.js";
import { Product } from "./Product.js";

export class Account  extends Person {
    id = Math.floor(Date.now() * Math.random()).toString(36)
    nikeName;
    email;
    #password;
    fashionNews = [];
    events = []

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


    addProduct(product) {
        if(product instanceof Product) {
            if(this.products.includes(product)) {
                throw new Error('Esta conta já possui este produto cadastrado')
            } else {
                this.products.push(product);
                return "Produto adicionado a esta conta com sucesso"
            }
        } else {
            throw new Error('Este produto não é uma instância de Produto')
        }
    }

    removeProduct(product) {
        if(product instanceof Product) {
            if(this.products.includes(product)) {
                this.products = this.products.filter(
                    (element) => element.id !==  product.id
                );

                return "Produto removido conta com sucesso"

            } else {
                throw new Error('Produto já está removido') 
            }
        } else {
            throw new Error('Este não é um produto válido')
        }
    };

    addNews(news) {
        if(news instanceof News) {
            if(this.fashionNews.includes(news)) {
                throw new Error('Esta conta já possui esta noticiacadastrado')
            } else {
                this.fashionNews.push(news);
                return "Noticia adicionado a esta conta com sucesso"
            }
        } else {
            throw new Error('Esta Noticia não é uma instância de News')
        }
    }

    addEvent(event) {
        if(event instanceof Event) {
            if(this.events.includes(event)) {
                throw new Error('Esta conta já possui este produto cadastrado')
            } else {
                this.events.push(event);
                return "Produto adicionado a esta conta com sucesso"
            }
        } else {
            throw new Error('Este produto não é uma instância de Produto')
        }
    }
}