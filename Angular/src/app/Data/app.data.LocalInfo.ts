import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";

@Injectable()
export class LocalInfo{
    

    constructor(private cookieService:CookieService)
    {
        
    }

    GetUserId():string
    {
        return this.cookieService.get("id");
    }
    
    SetUserId(id:number):void
    {
        this.cookieService.set("id",id.toString());
    }
}
