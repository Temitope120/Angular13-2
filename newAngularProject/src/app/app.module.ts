import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { NopageComponent } from './nopage/nopage.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { GetDataFromAPIComponent } from './get-data-from-api/get-data-from-api.component';
import { PostApiCallComponent } from './post-api-call/post-api-call.component';


// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ToDoListComponent,
    ChildComponent,
    UserDetailsComponent,
    UsdInrPipe,
    RedElDirective,
    NopageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent,
    GetDataFromAPIComponent,
    PostApiCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
   MatDatepickerModule,
   MatFormFieldModule,
   HttpClientModule
    // NgbPaginationModule,
    // NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
