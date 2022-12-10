import { Information } from "./Information.js";
import { Event } from "./Event.js";

export class EventInformation {
    event;
    information;

    static eventInformationList = [];

    constructor(event, information) {
        if(event instanceof Event) {
            this.event = event
        } else {
            throw new Error('Evento invalido')
        }

        if(information instanceof Information) {
            if(event.informations.includes(information)) {
                this.information = information
            } else {
                throw new Error('Este evento não pertence a lista de evento')
            }            
        } else {
            throw new Error('Informação invalido')
        }

        EventInformation.eventInformationList.push(this);
    }

    destroy() {
        let i = EventInformation.eventInformationList.indexOf(this);
        EventInformation.eventInformationList.splice(i, 1);
    };
}

