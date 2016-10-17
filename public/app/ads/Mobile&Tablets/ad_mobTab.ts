import { Ad } from '../advertisement';

export class Mob_Tab extends Ad{
    brand: string;
    warrenty: string;
    accessories: string;
    details: string;
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, w:string, ac:string, d:string){
        super(t,o,cn,p,a,i,c);
        this.brand=b;
        this.warrenty=w;
        this.accessories=ac;
        this.details=d;    
    }
}