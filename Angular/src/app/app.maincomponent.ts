import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  imports:[RouterOutlet,MatGridListModule,MatButtonModule,  MatIconModule,MatInputModule,MatExpansionModule,FormsModule],
  providers:[LocalInfo,DataContext,MatSnackBar],
  templateUrl: './app.maincomponent.html'
})


export class AppComponent{
  isAuthorised=false;
  login="";
  regLogin="";
  regPassword="";
  authLogin="";
  authPassword="";
  id=0;

  constructor(private localInfo:LocalInfo,private dataContext:DataContext,private snackBar:MatSnackBar)
  {
    let userId=localInfo.GetUserId();
    if (userId!="")
    {
      this.isAuthorised=true;
    }

  }  

  authorize()
  {
  this.dataContext.GetUser(this.authLogin,this.authPassword).then(
      (value)=>
      {
        if (value!=undefined)
        {
          this.login=this.authLogin;
          this.authPassword="";
          this.authLogin="";
          this.isAuthorised=true;
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
            this.login=this.regLogin;
            this.regLogin="";
            this.regPassword="";
            this.isAuthorised=true;
            }
            } 
          );
        } else this.snackBar.open("User with this login already exists");
         
      }
    );
  }

  exit()
  {
    this.isAuthorised=false;
    this.login="";
  }

  favorites()
  {

  }
  
}
