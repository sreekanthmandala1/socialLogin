import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookLoginComponent } from './components/facebook-login/facebook-login.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'google', component:GoogleLoginComponent},
  {path:'facebook', component:FacebookLoginComponent},
  {path:'profile', component: ProfileComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
