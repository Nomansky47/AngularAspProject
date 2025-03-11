import { Component,Input } from '@angular/core';
import { DataContext} from './Data/app.data.DataContext';
import { Phone } from './Model/app.model.phone';
import { CardList } from './app.cardlist';

@Component({
  selector: 'allcards',
  standalone:true,
  imports:[CardList],
  providers:[DataContext],
  templateUrl: './app.allcards.html',
})

//компонент со списком на главной странице
export class AllCards{
    @Input()
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