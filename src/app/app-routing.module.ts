import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalLayoutComponent } from './layouts/principal-layout/principal-layout.component';
import { BikeSizeComponent } from './views/bike-size/bike-size.component';

const routes: Routes = [
    {
        path: '', component: PrincipalLayoutComponent, children: [
            { path: '', component: BikeSizeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }