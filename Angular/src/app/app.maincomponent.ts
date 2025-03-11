import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { LocalInfo } from './Data/app.data.LocalInfo';
import { DataContext } from './Data/app.data.DataContext';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterLink,RouterOutlet,MatGridListModule,MatButtonModule,  MatIconModule,MatInputModule,MatExpansionModule,FormsModule],
  providers:[LocalInfo,DataContext,MatSnackBar],
  templateUrl: './app.maincomponent.html'
})

//Основной компонент-каркас. Содержит routerOutlet, для отображения страниц, а также верхние компоненты с авторизацией/регистрацией
export class AppComponent{
  isAuthorized=false;
  login="";
  regLogin="";
  regPassword="";
  authLogin="";
  authPassword="";
  id=0;

  constructor(private localInfo:LocalInfo,private dataContext:DataContext,private snackBar:MatSnackBar)
  {

  }  

  authorize()
  {
  this.dataContext.GetUser(this.authLogin,this.authPassword).then(
      (value)=>
      {
        if (value!=undefined)
        {
          this.login=this.authLogin;
          this.id=value.id;
          this.localInfo.SetUserId(value.id);
          this.authPassword="";
          this.authLogin="";
          this.isAuthorized=true;
        } else this.snackBar.open("Wrong login or password");

      }

    )
  }

  register()
  {
    this.dataContext.GetUser(this.regLogin,this.regPassword).then(
      (value)=>
      {
        if (value==undefined)
        {
         this.dataContext.AddUser(this.regLogin,this.regPassword).then(
           (answer)=> {
            if (answer ==true)
            {
            this.regLogin="";
            this.regPassword="";
            this.snackBar.open("Successfull registration");
            }
            } 
          );
        } else this.snackBar.open("User with this login already exists. Try another one");
         
      }
    );
  }

  exit()
  {
    this.isAuthorized=false;
    this.login="";
    this.localInfo.ClearId();
  }
  
}
