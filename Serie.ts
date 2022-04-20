export class Serie {

    id: number;
    name: string;
    company: string;
    seasons: number;
    Topic: string;
    link: string;
    picture:string;

    constructor( id: number,  name: string,  company: string, seasons: number, Topic: string, link: string, picture:string) {

        this.id=id;
        this.name=name;
        this.company=company;
        this.seasons=seasons;
        this.Topic=Topic;
        this.link=link;
        this.picture=picture;

       
      }

}





