import { Routes } from '@angular/router';
import { LoginComponent } from './plan/login/login.component';

export const routes: Routes = [
    {path:'plan',loadChildren:()=>import('./plan/plan.module').then( m=> m.PlanModule)}
    
    // {path:'login',component:LoginComponent}
];
