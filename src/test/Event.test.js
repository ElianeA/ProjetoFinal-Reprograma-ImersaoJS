import { Event } from "../models/Event.js"
import { EventInformation } from "../models/EventInformation.js";
import { Information } from "../models/Information.js";

describe("Event", () => {
    describe("Test the existence of the parameters of the class Event ", () => {

        it("verificar se instancia de Event é feita corretamente", () => {
            const event = new Event();
            expect(event instanceof Event).toBe(true);
            
            // remover da lista de instâncias
            event.destroy()
        
        });
        it ("should success if the eventName parameter exists", () => {
            const event = new Event();
            event.eventNome = "Campanha do agasalho"
            const result = event.eventNome
            expect(result).toEqual("Campanha do agasalho");
        });
        it ("should success if the responsible parameter exists", () => {
            const event =  new Event()
            event.responsible = "Paróquia Rainha da Paz"
            const result = event.responsible;
            expect(result).toEqual("Paróquia Rainha da Paz");
        });
        it ("should be success if the informations parameter exists", () => {
            const event =  new Event("Campanha do agasalho", "Paróquia Rainha da Paz")
            const information = new Information("22/02/2023", "10:00hs", "Avenida Freibenjamin", "Feira de arrecardação de roupas usadas para a campanha do agasalho")
            event.addInformation(information)
            const eventInformation = new EventInformation(event, information)
            const result = eventInformation

            expect(result).toEqual(eventInformation);
        });        
    });
})