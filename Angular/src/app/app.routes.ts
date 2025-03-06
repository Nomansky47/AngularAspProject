import { Routes } from '@angular/router';
import { AllCards } from './app.allcards';
import { CardInfo } from './app.cardinfo';
//https://metanit.com/web/angular2/7.1.php

export const routes: Routes = [

    {path:"cardinfo/:number",component:CardInfo},
    {path: "", component:AllCards}
];
