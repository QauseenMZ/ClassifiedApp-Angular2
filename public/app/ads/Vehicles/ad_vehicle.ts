import { Ad } from '../advertisement';

export class Vehicle extends Ad{
    brand: string;
    model: number;
    kms_driven: number;
    features: string;
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, m:number, kms:number,f:string){
        super(t,o,cn,p,a,i,c);
        this.brand=b;
        this.model=m;
        this.kms_driven=kms;
        this.features=f;    
    }
}