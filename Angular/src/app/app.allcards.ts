import { Component } from '@angular/core';
import {Card } from "./app.card"
import { DataContext} from './Data/app.data.DataContext';
import { Phone } from './Model/app.model.phone';

@Component({
  selector: 'allcards',
  standalone:true,
  imports:[Card],
  providers:[DataContext],
  templateUrl: './app.allcards.html',
})


export class AllCards{
    ItemsList: Phone[]=[]
    
    constructor(private Context:DataContext)
    {
      this.Context.GetAllPhonesPromise().then(
        (value)=>
        {
          this.ItemsList=value;
        }
      )
     
    }
}