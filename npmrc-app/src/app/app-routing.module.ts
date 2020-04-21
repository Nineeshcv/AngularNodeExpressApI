import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpmrcListComponent } from './npmrc-list/npmrc-list.component';
import { AddNpmrcConfigComponent } from './add-npmrc-config/add-npmrc-config.component';
import { EditNpmrcConfigComponent } from './edit-npmrc-config/edit-npmrc-config.component';


const routes: Routes = [
  {
    path:"viewConfigurations",component:NpmrcListComponent
    
  }/*,
  {
    path:"",component:NpmrcListComponent
  } */,
  {
    path:"addConfig",component:AddNpmrcConfigComponent
  },
  {
    path:'editConfigurations/:key/:value',
    component:EditNpmrcConfigComponent
  } /*,
  {
    path:'viewConfigurations/:key/:value',
    component:NpmrcListComponent,
    children: [
      {
        path:'editConfigurations',
        component:EditNpmrcConfigComponent
      }
    ]
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
