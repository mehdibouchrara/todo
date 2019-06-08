import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { UpdateListToDoComponent } from './update-list-to-do/update-list-to-do.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
//toaster component
import { ToastrModule } from 'ngx-toastr';
//moadl ngx bs 4 component
import { ModalModule } from 'ngx-bootstrap/modal';
//import reactive forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http' ;
import { TodoService } from './services/todo.service';

 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    InscriptionComponent,
    ListToDoComponent,
    AddToDoComponent,
    UpdateListToDoComponent,
    ConnexionComponent,
    NotFoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
