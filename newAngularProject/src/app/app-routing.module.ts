import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './nopage/nopage.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login',
    children: [
      {path: 'company', component: AboutCompanyComponent},
      {path: 'me', component: AboutMeComponent}
    ]
  },
  {
    component: UserDetailsComponent,
    path: 'user-details/:id'
    // not just id, it can be any name
  },
  {
    component: HeaderComponent,
    path: '' //leave the homepage path blank
  },
  {
    component: NopageComponent,
    path: '**' //leave the homepage path blank
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
