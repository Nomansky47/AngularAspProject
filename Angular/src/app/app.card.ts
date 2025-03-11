import {Input,Component} from "@angular/core";
import {MatCard, MatCardContent,MatCardActions, MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { LocalInfo } from "./Data/app.data.LocalInfo";
import { DataContext } from "./Data/app.data.DataContext";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component(
    {
        selector:"card",
        standalone:true,
        imports:[MatCardModule,MatCardActions,MatButtonModule,RouterLink],
        providers:[LocalInfo,DataContext,MatSnackBar],
        templateUrl:"./app.card.html"
    }
)


//компонент карточки телефона
export class Card {
    @Input() id=-1;
    @Input() name="";
    @Input() companyName="t";
    @Input() imageLink="";

    constructor(private localInfo:LocalInfo,private context:DataContext,private snackBar:MatSnackBar)
    {

    }

    AddFavorite()
    {
        let userId=this.localInfo.GetUserId();
        if(userId!=-1)
        {
            this.context.addFavorites(userId,this.id).then(
                (value)=>
                {
                    if (value)
                    this.snackBar.open("Phone added to favorites");
                else this.snackBar.open("Something went wrong");
                }
            ).catch(
                (value)=>
                {
                    this.snackBar.open("Something went wrong");
                }
            )
        } else this.snackBar.open("User not authorized");
    }
}