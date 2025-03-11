import {Component} from "@angular/core";
import { DataContext } from "./Data/app.data.DataContext";
import { Phone } from "./Model/app.model.phone";
import { LocalInfo } from "./Data/app.data.LocalInfo";
import { CardList } from "./app.cardlist";


@Component(
    {
        selector:"favorites",
        standalone:true,
        imports:[CardList],
        providers:[DataContext,LocalInfo],
        templateUrl:"./app.favorites.html"
    }
)





export class Favorites{

    phones:Phone[]=[];
    constructor(private Context:DataContext, private Local:LocalInfo)
    {
        let id=Local.GetUserId();
        if (id!=-1)
        {
        Context.getFavorites(id).then(
            (value)=>
            {
                this.phones=value;
            }
        );
        }

    }


}