import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Estoque } from './estoque/estoque';
import { Ranking } from './ranking/ranking';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home },
    { path: 'estoque', component: Estoque },
    { path: 'ranking', component: Ranking },
];
