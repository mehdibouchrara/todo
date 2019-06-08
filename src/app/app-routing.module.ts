import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { UpdateListToDoComponent } from './update-list-to-do/update-list-to-do.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'inscription',
    component:InscriptionComponent
  },

  {
    path:'connecter',
    component:ConnexionComponent
  },

  {
    path:'addToDo',
    component:AddToDoComponent
  },

  {
    path:'listToDo',
    component:ListToDoComponent
  },

  {
    path:'updateList',
    component:UpdateListToDoComponent
  },

  {
    path:'test',
    component:TestComponent
  },

  {
    path:'**',
    component:NotFoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
