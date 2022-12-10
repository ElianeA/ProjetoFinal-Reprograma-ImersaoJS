import { dateBirthValidation } from '../utils/validation.js';

export class Person {
    id = Math.floor(Date.now() * Math.random()).toString(36)
    name;
    phone;
    birthDate;
    pointsPerson = 100;
    products = [];

    static personList = [];

    constructor(name, phone, birthDate) {
        this.name = name;
        this.phone = phone;
        this.birthDate = birthDate;    
        
        Person.personList.push(this);
    }   
    
    destroy() {
        let i = Person.personList.indexOf(this);
        Person.personList.splice(i, 1);
    };

    createPerson(name, phone, birthDate) {
        let phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

        if (!phoneRegex.test(phone) || !dateBirthValidation(birthDate)) {
            throw new Error("Algo deu errado! Digite uma data válida maior ou igual à 18 anos")        
        } else {
            this.name = name;
            this.phone = phone;
            this.birthDate = birthDate;

            return "Usuario criado com sucesso"
        }
    };
  
}

