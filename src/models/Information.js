export class Information {
    date;
    time;
    address;
    description;

    constructor( date, time, address, description) {
        this.date = date;
        this.time = time;
        this.address = address;
        this. description = description
    }  

    addEvent(event) {
        if(event instanceof Event) {
            if(this.events.includes(event)) {
                throw new Error('Esta conta já possui este produto cadastrado')
            } else {
                this.events.push(event);
            }
        }
    }
}