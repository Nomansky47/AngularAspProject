import {Input,Component} from "@angular/core";
import {MatCard, MatCardContent,MatCardActions} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component(
    {
        selector:"card",
        standalone:true,
        imports:[ MatCard,MatCardContent,MatCardActions,MatButtonModule,RouterLink],
        templateUrl:"./app.card.html"
    }
)

export class Card {
    @Input() id=1;
    @Input() name="";
    @Input() companyName="t";
    @Input() imageLink="";

    OnClick()
    {
        this.name="Clicked";
    }
}