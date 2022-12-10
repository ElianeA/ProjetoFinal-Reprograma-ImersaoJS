import { Account } from "./Account.js";
import { News } from "./News.js";

export class AccountNews {
    account;
    news;

    static accountNewsList = [];

    constructor(account, news) {
        if(account instanceof Account) {
            this.account = account
        } else {
            throw new Error('Pessoa invalido')
        }

        if(news instanceof News) {
            if(account.fashionNews.includes(news)) {
                this.news = news
            } else {
                throw new Error('Esta Noticia não pertence a lista de noticias')
            }            
        } else {
            throw new Error('Noticia invalido')
        }

        AccountNews.accountNewsList.push(this);
    }

    destroy() {
        let i = AccountNews.accountNewsList.indexOf(this);
        AccountNews.accountNewsList.splice(i, 1);
    };
}