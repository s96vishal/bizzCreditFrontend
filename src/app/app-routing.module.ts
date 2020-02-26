import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IspsComponent } from './isp/isps/isps.component';
import { IspComponent } from './isp/isp/isp.component';


const routes: Routes = [{
  path:'isp',children:[
    {
      path:':id',component:IspComponent
    }
  ]}
  ,
  {
    path:'',redirectTo:'/isp',pathMatch:'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
