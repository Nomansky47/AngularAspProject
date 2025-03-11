import { Component,Input } from "@angular/core";
import { Card } from "./app.card";
import { Phone } from "./Model/app.model.phone";

@Component({
    selector: 'cardlist',
    standalone:true,
    imports:[Card],
    templateUrl: './app.cardlist.html'
  })


//Компонент отображения списка (нужен, для использования в других компонентах)
export class CardList{
    @Input()
    Cards:Phone[]=[];



}