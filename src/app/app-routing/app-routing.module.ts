import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinigameComponent } from '../minigame/minigame.component';
import { HomeComponent } from '../home/home.component';
import { ThermometerComponent } from '../thermometer/thermometer.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { PostComponent } from '../post/post.component';
import { PostCreateComponent } from '../post-create/post-create.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'minigame',
    component: MinigameComponent
  },
  {
    path: 'thermometer',
    component: ThermometerComponent
  },
  {
    path: 'data-table',
    component: DataTableComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'create/post',
    component: PostCreateComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
