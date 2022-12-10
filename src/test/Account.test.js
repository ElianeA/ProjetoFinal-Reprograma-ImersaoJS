import { Account } from "../models/Account.js";
import { Product } from "../models/Product.js";


describe("Account", () => {
    describe("Test the existence of the parameters of the Account ", () => {

        it("verificar se instancia de Account é feita corretamente", () => {
            const account = new Account();
            expect(account instanceof Account).toBe(true);
            
            // remover da lista de instâncias
            account.destroy()
        
        });
        it ("should success if the nikeName parameter exists", () => {
            const account =  new Account();
            account.nikeName = "lala"
            const result = account.nikeName
            expect(result).toEqual("lala");
        });
        it ("should success if the email parameter exists", () => {
            const account =  new Account()
            account.email = "lalapereira@gmail.com"
            const result = account.email
            expect(result).toEqual("lalapereira@gmail.com");
        });
        it ("should be success if the birthDate parameter exists", () => {
            const account =  new Account()
            account.password = "Sw@rovisk8"
            const result = account.password
            expect(result).toEqual("Sw@rovisk8");
        });
    });

    describe("Create Account ", () => {
        it("should failure when creating Person with invalid password", () => {
            const account = new Account();
            expect(() => account.createAccount("Juliana Andrade", "7788551122", "25/05/180", "lala", "lalapereira@gmail.com", "Sw@rovisk88")).toThrow("Error! Porfavor digite uma senha que contenha: deve conter ao menos um dígito; deve conter ao menos uma letra minúscula; deve conter ao menos uma letra maiúscula; deve conter ao menos um caractere especial; deve conter ao menos 8 dos caracteres mencionados");
            
            // remover da lista de instâncias
            account.destroy()        
        });
        it("should success when creating Person with valid password", () => {
            const account = new Account();
            expect(account.createAccount("Juliana Andrade", "7788551122", "25/05/180", "lala", "lalapereira@gmail.com", "Sw@rovisk8")).toBe("Conta criada com sucesso");
            
            // remover da lista de instâncias
            account.destroy()        
        });

        it("should failure when creating Person with invalid phone", () => {
            const account = new Account();
            expect(() => account.createAccount("Juliana Andrade", "7788551122", "25/05/180", "lala", "lalapereiragmail.com", "Sw@rovisk8")).toThrow("Erro, email inválido");
            
            // remover da lista de instâncias
            account.destroy()        
        });
        it("should success when creating Person with valid data", () => {
            const account = new Account();
            expect(account.createAccount("Juliana Andrade", "7788551122", "25/05/180", "lala", "lalapereira@gmail.com", "Sw@rovisk8")).toBe("Conta criada com sucesso");
            
            // remover da lista de instâncias
            account.destroy()        
        });
    });

    describe("Add Product", () => {
        it("should failure when add existing product ", () => {
            const account = new Account()
            account.createAccount("Lazaro", "77988675445", "22/02/1988", "lala", "lalapereira@gmail.com", "Sw@rovisk8")
            const product = new Product("Vestido Longo", "Vestido", "Vestido de viscose, vermelho longo", 50 )
            account.addProduct(product)
            expect(() => account.addProduct(product)).toThrow('Esta conta já possui este produto cadastrado');
            
            // remover da lista de instâncias
            account.destroy()        
        });
        it("should success when add product", () => {
            const account = new Account()
            account.createAccount("Lazaro", "77988675445", "22/02/1988", "lala", "lalapereira@gmail.com", "Sw@rovisk8")
            const product = new Product("Vestido Longo", "Vestido", "Vestido de viscose, vermelho longo", 50 )
            expect(account.addProduct(product)).toBe("Produto adicionado a esta conta com sucesso");
            
            // remover da lista de instâncias
            account.destroy()      
        });

        it("should failure when product is not a product", () => {
            const account = new Account()
            account.createAccount("Lazaro", "77988675445", "22/02/1988", "lala", "lalapereira@gmail.com", "Sw@rovisk8")
            const product = new Product()
            expect(() => account.addProduct(account)).toThrow('Este produto não é uma instância de Produto');
            
            // remover da lista de instâncias
            account.destroy()        
        });
    });

    describe("Remove Product", () => {
        it("should failure when remove non-existing product ", () => {
            const account = new Account()
            account.createAccount("Lazaro", "77988675445", "22/02/1988", "lala", "lalapereira@gmail.com", "Sw@rovisk8")
            const product = new Product("Vestido Longo", "Vestido", "Vestido de viscose, vermelho longo", 50 )
            account.addProduct(product)
            account.removeProduct(product)
            expect(() => account.removeProduct(product)).toThrow('Produto já está removido');
            
            // remover da lista de instâncias
            account.destroy()        
        });

        it("should failure when product is not a product", () => {
            const account = new Account()
            account.createAccount("Lazaro", "77988675445", "22/02/1988", "lala", "lalapereira@gmail.com", "Sw@rovisk8")
            const product = new Product()
            expect(() => account.removeProduct(account)).toThrow('Este não é um produto');
            
            // remover da lista de instâncias
            account.destroy()        
        });
    });
})