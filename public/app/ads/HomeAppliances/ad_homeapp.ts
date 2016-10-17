import { Ad } from '../advertisement';

export class Home_Applicances extends Ad{
    type: string;
    condition_details: string;
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string, ty:string, cd:string){
        super(t,o,cn,p,a,i,c);
        this.type=ty;
        this.condition_details=cd;
    }
}