import { News } from "../models/News.js"
import { Information } from "../models/Information.js";

describe("News", () => {
    describe("Test the existence of the parameters of the class News ", () => {

        it("verificar se instancia de News é feita corretamente", () => {
            const news = new News();
            expect(news instanceof News).toBe(true);
            
            // remover da lista de instâncias
            news.destroy()
        
        });
        it ("should success if the title parameter exists", () => {
            const news = new News();
            news.title = "Campanha do agasalho"
            const result = news.title
            expect(result).toEqual("Campanha do agasalho");
        });
        it ("should success if the subject parameter exists", () => {
            const news =  new News()
            news.subject = "Paróquia Rainha da Paz"
            const result = news.subject;
            expect(result).toEqual("Paróquia Rainha da Paz");
        });
        it ("should success if the description parameter exists", () => {
            const news =  new News()
            news.description = "Paróquia Rainha da Paz"
            const result = news.description;
            expect(result).toEqual("Paróquia Rainha da Paz");
        });   
    });
})