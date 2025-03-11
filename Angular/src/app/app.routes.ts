import { Routes } from '@angular/router';
import { AllCards } from './app.allcards';
import { CardInfo } from './app.cardinfo';
import { Favorites } from './app.favorites';


export const routes: Routes = [

    {path:"cardinfo/:number",component:CardInfo},
    {path: "", component:AllCards},
    {path:"favorites",component:Favorites}
];
