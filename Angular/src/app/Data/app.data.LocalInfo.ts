import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";

@Injectable()
export class LocalInfo{
    

    constructor(private cookieService:CookieService)
    {
        
    }

    GetUserId():number
    {
        let str=this.cookieService.get("id");
        if (str!="")
        return Number.parseInt(str);
        else return -1;
    }
    
    SetUserId(id:number):void
    {
        this.cookieService.set("id",id.toString());
    }

    ClearId():void
    {
        this.cookieService.delete("id");
    }
}
