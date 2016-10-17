export class Ad{
    
    title: string;
    owner: string;
    contact_num: number;
    price: number;
    area: string;
    img: string;
    category: string; 
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string){
        this.title= t;
        this.owner=o;
        this.contact_num= cn;
        this.price=p;
        this.area=a;
        this.img=i;
        this.category=c;
    }
}