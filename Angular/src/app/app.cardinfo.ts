import {Component} from "@angular/core";
import { ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import { DataContext } from "./Data/app.data.DataContext";
import {MatCardModule} from '@angular/material/card';
import { PhoneInfo } from "./Model/app.model.phoneinfo";
import { Phone } from "./Model/app.model.phone";
import { MatButton } from "@angular/material/button";
@Component(
    {
        selector:"cardinfo",
        standalone:true,
        imports:[MatCardModule,MatButton,RouterLink],
        providers:[DataContext],
        templateUrl:"./app.cardinfo.html"
    }
)

export class CardInfo {

    id:number|undefined;
    private subscription: Subscription;
    phone:Phone=new Phone();
    phoneInfo:PhoneInfo=new PhoneInfo();

    constructor(private Route:ActivatedRoute, private Context:DataContext)
    {
        this.subscription=Route.params.subscribe(p=>this.id=p["number"]);
        if (this.id!=undefined)
            {
            this.Context.GetPhonePromise(this.id).then(
                (value)=>
                {
                    this.phone=value;
                }
            );
            this.Context.GetPhoneInfoPromise(this.id).then(
                (value)=>
                {
                    this.phoneInfo=value;
                }
            );
            }
    }
}