
export class News {
    id = Math.floor(Date.now() * Math.random()).toString(36)
    title;
    subject;
    description;

    static newsList = [];

    constructor( title, subject, description) {
        this.title = title;
        this.subject = subject;
        this.description = description

        News.newsList.push(this);
    }

    destroy() {
        let i = News.newsList.indexOf(this);
        News.newsList.splice(i, 1);
    }; 
}