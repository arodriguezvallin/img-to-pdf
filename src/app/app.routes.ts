import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainProcessComponent } from './components/main-process/main-process.component';

export const routes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: '', component: MainProcessComponent},
    ]},
];
