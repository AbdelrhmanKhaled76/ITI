import { IParent } from "../Interfaces/IParent.js";

export class Parent implements IParent{
    name: string="";
    constructor(_name:string){
        this.name = _name
    }

    print(){
        return this.name
    }
}