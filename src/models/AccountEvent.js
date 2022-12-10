export class AccountEvent {
    account;
    event;

    static accountEventList = [];

    constructor(account, event) {
        if(account instanceof Account) {
            this.account = account
        } else {
            throw new Error('Pessoa invalido')
        }

        if(event instanceof News) {
            if(account.events.includes(event)) {
                this.news = news
            } else {
                throw new Error('Esta Noticia não pertence a lista de noticias')
            }            
        } else {
            throw new Error('Noticia invalido')
        }

        AccountNews.accountEventList.push(this);
    }

    destroy() {
        let i = AccountNews.accountEventList.indexOf(this);
        AccountNews.accountEventList.splice(i, 1);
    };

}