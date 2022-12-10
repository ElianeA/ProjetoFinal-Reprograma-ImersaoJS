import { Information } from "./Information.js";

export class Event {
    id = Math.floor(Date.now() * Math.random()).toString(36)
    eventName;
    responsible;
    informations = []

    static eventList = [];

    constructor(eventName, responsible) {
        this.eventName = eventName;
        this.responsible = responsible;

        Event.eventList.push(this);
    }

    destroy() {
        let i = Event.eventList.indexOf(this);
        Event.eventList.splice(i, 1);
    };    

    addInformation(information) {
        if(information instanceof Information) {
            if(this.informations.includes(information)) {
                throw new Error('Esta conta já possui este produto cadastrado')
            } else {
                this.informations.push(information);
            }
        }
    }


}

//const event = new Event("Campanha do agasalho", "Paróquia Rainha da Paz")
//console.log(event)