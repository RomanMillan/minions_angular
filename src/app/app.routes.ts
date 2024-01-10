import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MinionsComponent } from './minions/minions.component';
import { MinionComponent } from './minion/minion.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'index', component: IndexComponent},
    {path: 'minions', component: MinionsComponent},
    {path: 'minion', component: MinionComponent},
    {path: '**', component: NotFoundComponent}
];
