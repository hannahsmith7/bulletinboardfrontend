import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./auth/login/login/login.component";
import { BulletinpostCreateComponent } from "./bulletinpost/bulletinpost-create/bulletinpost-create.component";
import { BulletinpostDisplayComponent } from "./bulletinpost/bulletinpost-display/bulletinpost-display.component";
import { authGuard } from "./auth/auth.guard";

const routes: Routes = [
    {path:'', component:BulletinpostDisplayComponent, canActivate:[authGuard]},
    {path:'add', component:BulletinpostCreateComponent, canActivate:[authGuard]},
    {path:'login', component:LoginComponent},
    {path:'signup', component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}