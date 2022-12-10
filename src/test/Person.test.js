import { Person } from "../models/Person.js";

describe("Person", () => {
    describe("Test the existence of the parameters of the Person ", () => {

        it("verificar se instancia de Account é feita corretamente", () => {
            const person = new Person();
            expect(person instanceof Person).toBe(true);
            
            // remover da lista de instâncias
            person.destroy()
        
        });
        it ("should success if the name parameter exists", () => {
            const person =  new Person();
            person.nome = "Juliana Andrade"
            const result = person.nome
            expect(result).toEqual("Juliana Andrade");
        });
        it ("should success if the phone parameter exists", () => {
            const person =  new Person()
            person.phone = "77888551122"
            const result = person.phone
            expect(result).toEqual("77888551122");
        });
        it ("should be success if the birthDate parameter exists", () => {
            const person =  new Person()
            person.birthDate = "25/05/1980"
            const result = person.birthDate
            expect(result).toEqual("25/05/1980");
        });
        /** verificar como ficará
        it ("should success if the products parameter exists", () => {
            const products =  new Person()
            person.products = "Calça"
            const result = person.products
            expect(result).toEqual("Calça");
        });
        */
    });

    describe("Create Person ", () => {
        it("should failure when creating Person with invalid data", () => {
            const person = new Person();
            expect(() => person.createPerson("Juliana Andrade", "7788551122", "25/05/180")).toThrow("string não está no formato dd/mm/aaaa, ou não é uma data");
            
            // remover da lista de instâncias
            person.destroy()        
        });
        it("should success when creating Person with valid data", () => {
            const person = new Person();
            expect(person.createPerson("Juliana Andrade", "7788551122", "25/05/1980")).toBe("Usuario criado com sucesso");
            
            // remover da lista de instâncias
            person.destroy()        
        });

        it("should failure when creating Person with invalid phone", () => {
            const person = new Person();
            expect(() => person.createPerson("Juliana Andrade", "77888551122", "25/05/180")).toThrow("Algo deu errado! Digite uma data válida maior ou igual à 18 anos");
            
            // remover da lista de instâncias
            person.destroy()        
        });
        it("should success when creating Person with valid data", () => {
            const person = new Person();
            expect(person.createPerson("Juliana Andrade", "7788551122", "25/05/1980")).toBe("Usuario criado com sucesso");
            
            // remover da lista de instâncias
            person.destroy()        
        });
    });
})